import { User, UserPen } from "lucide-react";
import { useGetProfileQuery } from "../../../features/Auth/api/UserApi";
import { useAuth } from "../../context/AuthContext"
import { Button } from "../Button/Button";
import { Stack } from "../Stack/Stack"
import { Text } from "../Text/Text";
import styles from './AccountDropdown.module.scss'
import { getRouteSignIn } from "../../../app/router/config/routes";

export const AccountDropdown = () => {
    const { isAuthenticated, logout } = useAuth();

    const { data: profileData } = useGetProfileQuery();
    const user = profileData;


    return(
        <Stack className={styles.accountWrapper}>
            {isAuthenticated ? (
                <Stack gap={6} direction="column" align="center">
                    <User size={24} />
                    <Text size={12} className={styles.name}>{user?.firstName|| "Account"}</Text>
                </Stack>
                ) : (
                <UserPen size={30} />
                )
            }
            
            <Stack className={styles.dropdown}>
                {isAuthenticated ? 
                    <Stack direction="column" align="center" className={styles.dropdownText}>
                        <Text className={styles.text} size={24}>Hi, {user?.firstName || "there"}! </Text>
                        <Button tag="link" theme="nothing" className={styles.links}>My Profile</Button>
                        <Button tag="link" theme="nothing" className={styles.links}>My Reviews</Button>
                        <Button tag="link" theme="nothing" className={styles.links}>My Purchases</Button>
                        <Button theme="white" type="submit" onClick={logout}>Log Out</Button>
                    </Stack>
                    :
                    <Stack direction="column" align="center" gap={12} className={styles.dropdownText}>
                        <Text className={styles.text} size={24}>Welcome</Text>
                        
                        <Button tag="navlink" theme="nothing" to={getRouteSignIn()}> Your Account</Button>
                    </Stack>
                }
            </Stack>
        </Stack>
    )
}