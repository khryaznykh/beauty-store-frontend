import { useState } from "react"
import { Button } from "../Button/Button"
import { Stack } from "../Stack/Stack"
import styles from './AuthTabs.module.scss'
import { getRouteSignIn, getRouteSignUp } from "@/app/router/config/routes"

const AuthTabs = () => {
    
    return(
        <Stack gap={16} className={styles.container}>
            <Button
                tag="navlink"
                theme="nothing"
                fullWidth
                to={getRouteSignIn()}
                className={styles.tab}
            >
                Sign In
            </Button>

            <Button
                tag="navlink"
                theme="nothing"
                fullWidth
                to={getRouteSignUp()}
                className={styles.tab}
            >
                Join Now
            </Button>
        </Stack>
    )
}

export default AuthTabs;