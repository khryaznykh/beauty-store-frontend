import ProductDetailCard from "@/entities/ProductDetailCard/ui/ProductDetailCard";
import PostedReviews from "@/shared/ui/PostedReviews/PostedReviews";
import styles from './ProductDetails.module.scss';
import { Stack } from "@/shared/ui/Stack/Stack";

const ProductDetails = () => {
    return(
        <Stack direction="column" className={styles.container}>
            <ProductDetailCard/>
            <PostedReviews/>
        </Stack>
    )
}

export default ProductDetails;