import { Link, useLocation } from "react-router";
import { RoutesConfig } from "@/app/router/config/RoutesConfig";
import { Stack } from "../Stack/Stack"
import { Text } from "../Text/Text";
import styles from './NavBar.module.scss';
import CartShort from "../CartShort/CartShort";
import { Store, User, UserPen, Headset } from 'lucide-react';
import { useGetProfileQuery } from "@/features/Auth/api/UserApi";
import { useAuth } from "../../context/AuthContext";
import { AccountDropdown } from "../AccountDropdown/AccountDropdown";

const NavBar = () => {
    const location = useLocation()
    const { isAuthenticated } = useAuth();

    const {
        data: profileData
    } = useGetProfileQuery(undefined, {
        skip: !isAuthenticated
    });

    const user = profileData;
    console.log(location, user)
    return (
        <Stack gap={24} align='center' >
            {RoutesConfig
                .filter(navbar => navbar.name)
                .map((route,id)=>(
                    route.name === "Sign In" ?
                        <AccountDropdown/> :
                            <Link 
                                key={id} 
                                className={`${styles.linkStyle} 
                                            ${route.path === location.pathname ? styles.activeLink : ""}`
                                        }
                                to={route.path}
                            >
                                {route.name === "Cart" ? <CartShort/> : 
                                    route.name === "Shop" ? <Store size={30}/> :
                                        route.name === "Contact Us" ? <Headset size={30}/> : 
                                            `${route.name}`}
                            </Link>
            ))}
        </Stack>
    )
}

export default NavBar;