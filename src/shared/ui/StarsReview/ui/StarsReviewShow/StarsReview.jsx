import { Stack } from "../../../Stack/Stack";
import { Star } from 'lucide-react';
import PartialStar from "./PartialStar";

const StarsReview = ({ rating, maxRating = 5 }) => {
    const fullStars = Math.floor(rating);
    const partialStar = rating - fullStars;

    return(
        <Stack>
            {Array
                .from({length: maxRating})
                .map((_, index) => {
                    if (index < fullStars) {
                        return(
                            <Star color="yellow" fill="yellow" size={24} strokeWidth={0.75} key={index}/>
                        )
                    }
                    
                    if (index === fullStars && partialStar > 0) {
                        return (
                            <PartialStar partialStar={partialStar} index={index} key={index}/>
                        );
                    }
                    
                    return(
                        <Star color="yellow" strokeWidth={0.75}/>
                    )        
                })
            }
        </Stack>
    )
}

export default StarsReview;