import { useSelector } from "react-redux"
import { Stack } from "../Stack/Stack"
import { getTax, getTotalAmount, getTotalPrice, getTotalWithTax } from "@/features/CartItem/model/cartSlice"
import { Text } from "../Text/Text"
import { Button } from "../Button/Button";
import styles from "./CartTotal.module.scss"
import { Link, useActionData } from "react-router";
import { getRoutePrivacyPolicy, getRouteTermsAndCond } from "@/app/router/config/routes";

const CartTotal = () => {
    const totalPrice = useSelector(getTotalPrice);
    const totalItems = useSelector(getTotalAmount);
    const tax  = useSelector(getTax);
    const finalPrice = useSelector(getTotalWithTax) //need to add shipping

    return (
        <Stack direction="column" gap={24} className={styles.cartContainer}>
            
            <Text size={32}>Order Summary</Text>
            <hr className={styles.line}/>
            <Stack  className={styles.price}>
                <Text size={16}>Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"}):</Text>
                <Text className={styles.totalPrice}> ${totalPrice.toFixed(2)}</Text>
            </Stack>
            <Stack className={styles.price}>
                <Text>Shipping</Text>
                <Text className={styles.totalPrice}>NNN</Text>
            </Stack>
            <Stack className={styles.price}>
                <Text>Estimated Tax</Text> 
                {/* 7% */}
                <Text className={styles.totalPrice}>${tax.toFixed(2)}</Text>
            </Stack>
            <hr className={styles.line}/>
            <Stack  className={styles.price}>
                <Text className={styles.total} size={18}>Estimated Total:</Text>
                <Text className={styles.final} size={18}> ${finalPrice.toFixed(2)}</Text>
            </Stack>
            <Button fullwidth>Checkout</Button>
            <Text>By selecting "Checkout" you agree to our <Link to={getRouteTermsAndCond()}>Terms of Use</Link>,<Link to={getRoutePrivacyPolicy()}> Privacy Policy</Link> and <Link>Return Policy</Link></Text>
        </Stack>
    )
}

export default CartTotal