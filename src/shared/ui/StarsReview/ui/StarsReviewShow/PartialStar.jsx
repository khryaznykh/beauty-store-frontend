import { Star } from 'lucide-react';
import { Stack } from '../../../Stack/Stack';


const PartialStar = ({partialStar, index}) => {
    return(
        <Stack
            key={index}
            style={{
                position: "relative",
                width: 24,
                height: 24,
            }}
        >
              {/* Empty outlined star */}
            <Star
                size={24}
                color="yellow"
                fill="none"
                strokeWidth={0.75}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
            />

            {/* Clipping container */}
            <Stack
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: `${partialStar * 100}%`,
                    height: 24,
                    overflow: "hidden",
                }}
            >
                <Star
                    size={24}
                    strokeWidth={0.75}
                    color="yellow"
                    fill="yellow"
                    style={{
                        minWidth: 24,
                    }}
                />
            </Stack>
        </Stack>
    )
}

export default PartialStar;