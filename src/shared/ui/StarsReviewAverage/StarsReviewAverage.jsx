import { useParams } from "react-router";
import { useGetPublishedReviewsQuery } from "../Review/api/ReviewApi";
import { Stack } from "../Stack/Stack";
import StarsReview from "../StarsReview/ui/StarsReviewShow/StarsReview";
import { Text } from "../Text/Text";

const StarsReviewAverage = ({productId}) => {
    const{
        data,
        isLoading,
        error
    } = useGetPublishedReviewsQuery({productId});
    
    const averageRating = data?.averageRating || 0;
    const totalReviews = data?.totalReviews || 0;

    if (isLoading) {
        return <Text>Loading...</Text>;
    }
    if (error) {
        return <Text>Error loading product</Text>;
    }
    
    return(
        <Stack gap={12} align="center">
            <StarsReview rating={averageRating}/>
            <Text>{averageRating==0 ? "" : averageRating.toFixed(1)}</Text>
            <Text>({totalReviews} reviews)</Text>
        </Stack>
    )
}

export default StarsReviewAverage;