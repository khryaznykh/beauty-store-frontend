import { SignInForm } from "@/features/Auth/ui/SignIn/SignInForm"
import Footer from "@/shared/ui/Footer/Footer"
import { Header } from "@/shared/ui/Header/Header"
import { Stack } from "@/shared/ui/Stack/Stack"
import AuthTabs from "@/shared/ui/AuthTabs/AuthTabs"
import styles from './SignInPage.module.scss'

export const SignInPage = () => {
    return(
        <Stack direction="column" align="center" className={styles.container}>
            <Header/>
            <Stack direction="column" align="center" className={styles.containerAuth}>
                <AuthTabs/>
                <SignInForm/>
            </Stack>
            <Footer/>
        </Stack>
    )
}

