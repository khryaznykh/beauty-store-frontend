import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext(null);

const isTokenValid = (token) => {
    if (!token) return false;

    try {
        const decoded = jwtDecode(token);
        if (!decoded.exp) return false;
        return decoded.exp * 1000 > Date.now(); ///exp in seconds, Date.now is in miliseconds
    } catch {
        return false
    }
}

export const AuthProvider = ({ children }) => {
    //determines the initial authentication status
    const [isAuthenticated, setIsAuthenticated] = useState(()=>{
        return isTokenValid(Cookies.get("token"))
    });

    //LOGIN
    const login = useCallback((token) => {
        if (!isTokenValid(token)) {
            return false;
        } 

        const decoded = jwtDecode(token);
        const exp = decoded.exp;
        // same const { exp } = jwtDecode(token);

        //Cookie expires when JWT expires
        Cookies.set('token', token, { 
            expires: new Date(exp*1000),
            sameSite: "Lax",
            secure: window.location.protocol === "https:" 
        });
        setIsAuthenticated(true);

        return true;
    },[]);

    //LOGOUT
    const logout = useCallback(() => {
        Cookies.remove('token');
        setIsAuthenticated(false);
    },[]);

    //Check token when app starts
    //cleans up an expired or invalid cookie
    useEffect(() => {
        const token = Cookies.get('token'); 
        if (!isTokenValid(token)){
            logout()
        }
    }, [logout]);

    //Listen for 401 Unauthorized responses
    //backend rejects the user's token
    useEffect(() => {
    const handleUnauthorized = () => {
        logout();
    };

    window.addEventListener(
        "auth:unauthorized",
        handleUnauthorized
    );

    //removes listener when the effect cleans up
    return () => {
        window.removeEventListener(
            "auth:unauthorized",
            handleUnauthorized
        );
    };
}, [logout]);


    //Automatically logout when JWT expires
    useEffect(()=>{
        if (!isAuthenticated) return;

        const token = Cookies.get("token");
        if (!isTokenValid(token)) {
            logout();
            return;
        }

        const { exp } = jwtDecode(token);
        const remainingTime = exp *1000 - Date.now();

        const timeout = setTimeout(()=> {
            logout();
        }, remainingTime);
        //clean up the timer
        return ()=> clearTimeout(timeout)
    }, [isAuthenticated, logout])


    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () =>{
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error ("useAuth must be used inside the AuthProvider")
        
    }
    return context
} 
