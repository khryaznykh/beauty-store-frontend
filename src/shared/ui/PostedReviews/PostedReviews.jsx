import { useParams } from "react-router";
import { useGetPublishedReviewsQuery } from "../Review/api/ReviewApi";
import { Stack } from "../Stack/Stack"
import { Text } from "../Text/Text";
import ReviewCard from "@/entities/ReviewCard/ui/ReviewCard";
import Slider from "../Slider/Slider";
import styles from './PostedReviews.module.scss'

const PostedReviews =()=> {

    const { productId } = useParams();
    const {
        data: reviewsData,
        isLoading,
        error
    } = useGetPublishedReviewsQuery({productId});

    const reviews = reviewsData?.data || [];
    
    if (isLoading) {
        return (
            <Stack justify='center' align='center' fullWidth>
                Loading....
            </Stack>
        );
    }
    if (error) {
        return (
        <Stack justify='center' align='center' fullWidth>
            <Text>Error loading reviews</Text>
        </Stack>
        );
    }

    return(
        <Slider slides={reviews}>
            {(review) => (
                <ReviewCard review={review}/>
            )}
        </Slider> 
    )
}

export default PostedReviews;