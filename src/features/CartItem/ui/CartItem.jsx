import { useDispatch } from "react-redux";
import { useState } from "react";
import { Stack } from "@/shared/ui/Stack/Stack";
import Quantity from "@/shared/ui/Quantity/Quantity";
import styles from './CartItem.module.scss';
import { Text } from "@/shared/ui/Text/Text";
import { Button } from "@/shared/ui/Button/Button";

const CartItem = ({ itemInCart }) => {
    console.log(itemInCart)
    const [amount, setAmount] = useState (itemInCart.amount)
    const dispatch = useDispatch();
    return (
        <Stack direction="column" gap={16}>
            <Stack direction="row" align="start" justify="between" gap={24} className={styles.cartItem}>
                <Stack>
                    <img src = {`${itemInCart.image}.jpg`} width={170} height={200} alt="item" />
                </Stack>
                <Stack direction="column" gap={16} className={styles.textContainer}>
                    <Text size={20} className={styles.name}>{itemInCart.name}</Text>
                    <Text size={14} className={styles.description}>{itemInCart.description}</Text>
                    <Text size={14}>Size: {itemInCart.size}</Text>
                    <Text size={18} className={styles.price}><span className={styles.sign}>$</span>{Number(itemInCart.price).toFixed(2)}</Text>
                    <Quantity amount = {amount} setAmount={setAmount} itemInCart={itemInCart}/>
                </Stack>
            </Stack>
            <hr className={styles.line}/>
        </Stack>
    )
}
export default CartItem;