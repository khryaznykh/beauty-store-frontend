import { useSelector } from "react-redux";
import { getCartItems, getTotalAmount } from "@/features/CartItem/model/cartSlice";
import CartItem from "@/features/CartItem/ui/CartItem";
import CartTotal from "@/shared/ui/CartTotal/CartTotal";
import { Stack } from "@/shared/ui/Stack/Stack";
import styles from './Cart.module.scss';
import { Text } from "@/shared/ui/Text/Text";
import { Loader } from 'lucide-react';
import { FaceSlightlyFrowning } from 'lucide-react';


const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalItems = useSelector(getTotalAmount);
    return (
        <>
        {totalItems === 0 
            ? 
            <Stack gap={24} direction="column" align="center" className={styles.cartEmpty}>
                <Text size={48} color="green" >Your Cart is Empty</Text>
                <FaceSlightlyFrowning className={styles.sadFace} strokeWidth={0.75} size={200} />
            </Stack>
            :
            <Stack justify="between" gap={24}>
                <Stack direction='column' gap={24} className={styles.cartContainer}>
                    <Stack gap={24} align="center">
                        <Text size={32}>Shopping Bag </Text>
                            <Loader/> 
                        <Text size={14}>  {totalItems} {totalItems === 1 ? "item" : "items"}</Text>
                    </Stack>
                
                    <hr className={styles.line}/>
                    {cartItems.map (itemInCart =>
                        <Stack direction="colunm"  className={styles.cart}>
                            <CartItem key={itemInCart.id} itemInCart = { itemInCart } />
                        </Stack>
                    )}
                </Stack>
            
                <Stack className={styles.cartTotalContainer}>
                    <CartTotal/>
                </Stack>
            </Stack>
        }
        </>
    )
}
export default Cart;