import { Link } from "react-router"
import { Stack } from "../Stack/Stack"
import { Text } from "../Text/Text"
import style from './Footer.module.scss'

const Footer = () => {
    return (
        <Stack className={style.container} gap={4} justify="between">
            <Stack direction="column" className={style.box}>
                <Text fontStyle="alexbrush" size={32}>Cosmetics de Luxe</Text>
                <Text size={14}>Boost your beauty and youth<br/> with our products</Text>
            </Stack>
            <Stack direction="column" gap={4} className={style.box}>
                <Text size={20} className={style.header}>Our Location:</Text>
                <Text size={14}>333 Luxe Ave</Text>
                <Text size={14}>Salt Lake City</Text>
                <Text size={14}>UT, 84111</Text>
            </Stack>
            <Stack direction="column" gap={4} className={style.box}>
                <Text size={20} className={style.header}>Our Contacts:</Text>
                <Link to="/" className={style.links}>
                    Facebook
                </Link>
                <Link to="/" className={style.links}>
                    Instagram
                </Link>
                <Text size={20} className={style.header}>Call Us:</Text>
                <Text size={14}>111-111-22-33</Text>
            </Stack>
        </Stack>
    )
}
export default Footer