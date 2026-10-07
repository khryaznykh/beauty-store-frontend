import Footer from "@/shared/ui/Footer/Footer"
import { Header } from "@/shared/ui/Header/Header"
import { Stack } from "@/shared/ui/Stack/Stack"
import ProductDetails from "@/widgets/ProductDetails/ui/ProductDetails";
import styles from './ShopItemPage.module.scss';

const ShopItemPage = () => {
    return (
        <Stack direction="column" align='center' className={styles.shopPage}>
            <Header/>
            <ProductDetails/>
            <Footer/>
        </Stack>
    )
}
export default ShopItemPage;