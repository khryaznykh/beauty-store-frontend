import CartHeader from "../../../shared/ui/CartTotal/CartTotal"
import Footer from "../../../shared/ui/Footer/Footer";
import { Header } from "../../../shared/ui/Header/Header"
import { Stack } from "../../../shared/ui/Stack/Stack";
import Cart from "../../../widgets/Cart/ui/Cart";
import styles from './CartPage.module.scss';

const CartPage = () => {
    return (
        <Stack direction='column' className={styles.cartPage} >
            <Header/>
            <Cart/>
            <Footer/>
        </Stack>
    )
}

export default CartPage;