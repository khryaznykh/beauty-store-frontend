import { Stack } from "../Stack/Stack"
import { Text } from "../Text/Text";
import { ShoppingCart } from 'lucide-react';
import styles from './CartShort.module.scss';
import { useSelector } from "react-redux";
import { getTotalAmount } from "@/features/CartItem/model/cartSlice";

const CartShort = () => {
    const totalItems = useSelector(getTotalAmount)
    return(
        <Stack className={styles.iconWrapper}>
            <ShoppingCart size={36} />
            <Stack justify="center" align="center" className={ totalItems === 0 ? "" : styles.circle}>
                <Text size={12} className={styles.iconText}>{totalItems === 0 ? "" : `${totalItems}`}</Text>
            </Stack>
        </Stack>
    )
}

export default CartShort;