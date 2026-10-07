import styles from "./Welcome.module.scss";

import { Stack } from "@/shared/ui/Stack/Stack";
import { Text } from "@/shared/ui/Text/Text";
import { Button } from "@/shared/ui/Button/Button";

import { getRouteProducts } from "../../../app/router/config/routes";

function Welcome() {
    return (
        <Stack className={styles.homePage}>
            <Stack className={styles.untitled}>
                {/* Background */}
                <Stack className={styles.untitled__slideBg} />
                {/* Content */}
                <Stack
                    direction="column"
                    align="center"
                    gap={48}
                    className={styles.untitled__slideContent}
                >
                    <Text
                        size={150}
                        fontStyle="alexbrush"
                        color="white"
                    >
                        Cosmetiques de Luxe
                    </Text>
                    <Text size={32} color="white">
                        Discover your beauty
                    </Text>
                    <Button
                        tag="link"
                        to={getRouteProducts()}
                        theme="white"
                        className={styles.buttonShop}
                    >
                        SHOP NOW
                    </Button>
                </Stack>
                {/* Shutters */}
                <Stack className={styles.untitled__shutters} />
            </Stack>
        </Stack>
    );
}

export default Welcome;