import { Link, useLocation } from "react-router";
import { RoutesConfig } from "@/app/router/config/RoutesConfig";
import { Stack } from "../Stack/Stack"
import { Text } from "../Text/Text";
import styles from './NavBar.module.scss';
import CartShort from "../CartShort/CartShort";
import { Store, User, UserPen, Headset } from 'lucide-react';
import { useGetProfileQuery } from "@/features/Auth/api/UserApi";

const NavBar = () => {
    const location = useLocation()
    const token = localStorage.getItem("token");
    const {
        data: profileData
    } = useGetProfileQuery(undefined, {
        skip: !token
    });

    const user = profileData?.data;
    console.log(location, user)
    return (
        <Stack gap={24} align='center' >
            {RoutesConfig
                .filter(navbar => navbar.name)
                .map((route,id)=>(
                <Link 
                    key={id} 
                    className={`${styles.linkStyle} ${route.path === location.pathname ? styles.activeLink : ""}`}
                    to={route.path}
                >
                    {route.name === "Cart" ? <CartShort/> : 
                        route.name === "Shop" ? <Store size={30}/> :
                            route.name === "Contact Us" ? <Headset size={30}/> : 
                                route.name === "Sign In" ?
                                    (user ? (
                                        <Stack gap={6} direction="column" align="center">
                                            <User size={24} />
                                            <Text size={12} className={styles.name}>{/* {user.firstName} */}name</Text>
                                        </Stack>
                                        ) : (
                                        <UserPen size={30} />
                                        )
                                    )
                                        : `${route.name}`}
                </Link>
            ))}
        </Stack>
    )
}

export default NavBar;