import { useNavigate, useParams } from "react-router";
import { Stack } from "@/shared/ui/Stack/Stack";
import styles from './ProductDetailCard.module.scss'
import { Button } from "@/shared/ui/Button/Button";
import Quantity from "@/shared/ui/Quantity/Quantity";
import { Text } from "@/shared/ui/Text/Text";
import { useState } from "react";
import { getRouteLeaveReview } from "@/app/router/config/routes";
import { useDispatch } from "react-redux";
import { addItemsToCart } from "@/features/CartItem/model/cartSlice";
import { useGetProductByIdQuery } from "../../ProductCard/api/ProductApi";
import StarsReviewAverage from "@/shared/ui/StarsReviewAverage/StarsReviewAverage";
import { useAuth } from "@/shared/context/AuthContext";
import { getRouteSignIn } from "../../../app/router/config/routes";

const ProductDetailCard = () => {

    const { productId } = useParams();
    const dispatch = useDispatch();
    const [amount, setAmount] = useState (1);
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const{
        data,
        isLoading,
        error
    } = useGetProductByIdQuery({productId});

    const handleWriteReview =()=>{
        if (!isAuthenticated) {
            navigate(getRouteSignIn(), {
                state: {
                    from: getRouteLeaveReview()
                }
            });
            return;
        } 
        navigate(getRouteLeaveReview(productId));
    }

    const product = data?.data;
    if (isLoading) {
        return <Text>Loading...</Text>;
    }
    if (error) {
        return <Text>Error loading product</Text>;
    }
    if (!product) {
        return <Text>Product not found</Text>;
    }
    console.log("ProductId:", productId);
    console.log("RTK data product", product.image);

    return(
        <Stack gap={48} className={styles.itemCardShopContainer}>
            <Stack  className={styles.imageContainer}>
                <img src={product.image} className={styles.image} alt="image"/>
            </Stack>
            <Stack direction="column" key={product._id} gap={16} className={styles.textContainer}>
                <Text fontStyle="alexbrush" size={48} className={styles.name}>{product.name}</Text>
                <StarsReviewAverage productId={product._id}/>
                <Text size={16} className={styles.description}>{product.description}</Text>
                <Text size={24}> ${product.price}</Text>
                <Quantity amount={amount} setAmount={setAmount}/>
                <Button className={styles.button} onClick={() => {dispatch(addItemsToCart({shopItem: product, amount: amount}))}}>
                    Add to cart
                </Button>
                <Button theme="light" onClick={handleWriteReview} >
                    Leave a review
                </Button>
                {/* <Button tag="link" theme="light" to={getRouteLeaveReview(product._id)} >
                    Leave a review
                </Button> */}
            </Stack>
        </Stack>
    )
}

export default ProductDetailCard;
