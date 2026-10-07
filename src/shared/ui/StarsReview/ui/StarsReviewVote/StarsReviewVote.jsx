import { Star } from "lucide-react";
import { Stack } from "../../../Stack/Stack";
import { useState } from "react";

const StarsReviewVote = ({value = 0, onChange}) => {
    return(
        <Stack>
            {Array.from({length: 5})
                    .map((_,index)=>{
                        const starIndex = index + 1
                        return(
                            <Star 
                                key={index}
                                strokeWidth={0.75}
                                color="green" 
                                size={50}
                                fill={index < value ? "yellow" : "none"}
                                onClick={()=>{onChange(starIndex)}}
                            />
                        )
                    })
            }
        </Stack>
    )
}

export default StarsReviewVote;