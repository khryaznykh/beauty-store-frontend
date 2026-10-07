import { useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import { Stack } from "../Stack/Stack";
import { Text } from "../Text/Text";
import styles from './Quantity.module.scss'
import { Plus } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Minus } from 'lucide-react';
import { deleteItemFromCart, updateItemsInCart } from "@/features/CartItem/model/cartSlice";
import { useLocation } from "react-router";

const Quantity = ({ amount, setAmount, itemInCart }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const isThisCart = location.pathname.includes("cart");

    const minusOne = () => {
        if (isThisCart && amount===1) {
            dispatch (deleteItemFromCart({cartItemId: itemInCart.id}))
            console.log("cart deleted")
            return
        }
        if (amount > 1) {
            const newAmount = amount - 1;
            setAmount(newAmount)
            console.log("just minus")
            if (isThisCart) {
                dispatch(updateItemsInCart({itemInCart, amount: newAmount, idClicked: itemInCart.id}))
                console.log("just minus in cart")
            }
        }
    }
        
    const plusOne = () => {
        const newAmount = amount + 1;
        setAmount(newAmount)
        if (isThisCart) {
            dispatch(updateItemsInCart({itemInCart, amount: newAmount, idClicked: itemInCart.id}))
        }
    }
    
    return (
        <Stack gap={12} align="center" justify="between" className={styles.buttonWrapper} >
            <Button theme="light" onClick={minusOne}>
                {amount === 1 && isThisCart 
                    ? <Trash2 size={20}/> 
                    : <Minus size={20}/>}
            </Button>
                <Text size={16}> {amount} </Text>
            <Button theme="light" onClick={plusOne}> 
                <Plus size={20}/>
            </Button>
        </Stack>
    )
}
export default Quantity;