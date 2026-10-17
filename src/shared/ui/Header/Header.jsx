import { Link, useLocation, useParams } from "react-router";
import SearchItems from "@/features/SearchItems/ui/SearchItems";
import { Button } from "../Button/Button";
import NavBar from "../NavBar/NavBar";
import { Stack } from "../Stack/Stack";
import { Text } from "../Text/Text";
import CartHeader from "../CartTotal/CartTotal";
import styles from './Header.module.scss';
import CartShort from "../CartShort/CartShort";
import { getRouteCart } from "@/app/router/config/routes";


export const Header =()=> {
    const currentLocation = useLocation();
    console.log(currentLocation);
    return (
        <Stack 
            justify='end' 
            align='center' 
            gap={48}
            className={styles.headerContainer}>
                <Text fontStyle='alexbrush' color='green' size={48} className={styles.logo}>Cosmetiques de Luxe</Text>
                {currentLocation.pathname === "/products" ? <SearchItems/> : ""}
                <NavBar/>
                <Link to={getRouteCart()}>
                    <CartShort/>
                </Link>
        </Stack>
    )
}