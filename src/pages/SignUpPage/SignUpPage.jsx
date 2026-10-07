import Footer from "@/shared/ui/Footer/Footer"
import { Header } from "@/shared/ui/Header/Header"
import { Stack } from "@/shared/ui/Stack/Stack"
import AuthTabs from "@/shared/ui/AuthTabs/AuthTabs"
import styles from './SignUpPage.module.scss'
import { SignUpForm } from "@/features/Auth/ui/SignUp/SignUpForm"

export const SignUpPage = () => {
    return(
        <Stack direction="column" align="center" className={styles.container}>
            <Header/>
            <AuthTabs/>
            <SignUpForm/>
            <Footer/>
        </Stack>
    )
}

