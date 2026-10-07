import Footer from "@/shared/ui/Footer/Footer";
import { Header } from "@/shared/ui/Header/Header";
import Review from "@/shared/ui/Review/Review";
import { Stack } from "@/shared/ui/Stack/Stack";
import styles from "./LeaveReviewPage.module.scss";

const LeaveReviewPage = () => {
    return(
        <Stack direction="column" className={styles.container} >
            <Header/>
            <Review/>
            <Footer/>
        </Stack>
    )
}

export default LeaveReviewPage;