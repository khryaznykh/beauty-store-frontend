import StarsReview from "@/shared/ui/StarsReview/ui/StarsReviewShow/StarsReview";
import { ThumbsUp } from 'lucide-react';
import { ThumbsDown } from 'lucide-react';
import { Stack } from "@/shared/ui/Stack/Stack";
import { Text } from "@/shared/ui/Text/Text";
import styles from './ReviewCard.module.scss'

const ReviewCard = ({review}) => {
    const createdDate = new Date(review.createdAt).toLocaleDateString();
    const editedDate = review.editedAt
        ? new Date(review.editedAt).toLocaleDateString()
        : null;

    return (
        <Stack direction="column" gap={4} className={styles.cardContainer}>
            <StarsReview rating={review.rating}/>
            <Text>{review.headline}</Text>
            <Text size={20} className={styles.review}>"{review.review}"</Text>
            <Text size={14} className={styles.bottomReview}>Do you recommend this product?
                <span className={styles.thumbsup}>
                    {(review.recommend==="yes") 
                        ? <ThumbsUp/>
                        : <ThumbsDown/>}
                </span>
            </Text>
            <Text size={14} className={styles.nameStyle}>{review.user.firstName} {review.user.lastName}</Text>
            <Text size={14} className={styles.dateStyle}>Posted: {createdDate}</Text>
            <Text size={14} className={styles.dateStyle}> 
                {editedDate !== null 
                                    ? `Updated: {editedDate}`
                                    : ""}
            </Text>
        </Stack>
    )
}

export default ReviewCard;