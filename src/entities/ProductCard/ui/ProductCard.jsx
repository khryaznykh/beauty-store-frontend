import { useState } from "react";
import styles from './ProductCard.module.scss';
import { Button } from "@/shared/ui/Button/Button";
import { Text } from "@/shared/ui/Text/Text";
import { Stack } from "@/shared/ui/Stack/Stack";
import { addItemsToCart } from "@/features/CartItem/model/cartSlice";
import { useDispatch } from "react-redux";
import { getRouteProductDetails } from "@/app/router/config/routes";
import { Link } from "react-router";

const ProductCard = ({ shopItem }) => {
    const [amount, setAmount] = useState(1);
    const dispatch = useDispatch()

    return (
        <Stack direction="column" align="center" gap={12} className={styles.itemContainer} key={shopItem.id}>
            <Link key={shopItem._id} to={getRouteProductDetails(shopItem._id)} >
                <Stack direction="column" align="center" gap={8}>        
                    <img src={`${shopItem.image}.jpg`} alt="shop product" width={220} height={220}/>
                    <Text className={styles.name} size={20}>{shopItem.name.toUpperCase()}</Text>
                    <Text size={8}>{shopItem.manufactor}</Text>
                    <Text className={styles.price} size={24}><span className={styles.sign}>$</span>{Number(shopItem.price).toFixed(2)}</Text>
                </Stack>
            </Link>
            <Button className={styles.button} onClick={()=> {dispatch(addItemsToCart({shopItem, amount}))}}>ADD</Button> 
        </Stack>
    )
}
export default ProductCard;