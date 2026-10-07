import Footer from "@/shared/ui/Footer/Footer"
import { Header } from "@/shared/ui/Header/Header"
import { Stack } from "@/shared/ui/Stack/Stack"
import BeautyStore from "@/widgets/BeautyStore/ui/BeautyStore";
import styles from './ShopPage.module.scss';

const ShopPage = () => {
    return (
        <Stack direction="column" align='center' className={styles.shopPage}>
            <Header/>
            <BeautyStore/>
            <Footer/>
        </Stack>
    )
}
export default ShopPage;