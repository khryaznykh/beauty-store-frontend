import { useParams } from "react-router";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Stack } from "../Stack/Stack";
import StarsReviewVote from "../StarsReview/ui/StarsReviewVote/StarsReviewVote";
import { Text } from "../Text/Text";
import styles from './Review.module.scss';
import { useForm, Controller } from "react-hook-form";
import { useGetProductByIdQuery } from "@/entities/ProductCard/api/ProductApi";
import { useCreateReviewMutation } from "./api/ReviewApi";

const Review = () => {
    const { productId } = useParams();
    const {
        data: productData,
        isLoading,
        error
    } = useGetProductByIdQuery({productId});
    
    const [
        createReview,
        { isLoading: isCreatingReview }
    ] = useCreateReviewMutation();

    const {
        register,        // Registers input fields
        handleSubmit,    // Handles form submission
        control,
        formState: { errors, isSubmitting }, // Tracks errors and submission state
        reset,            // Resets form fields
        watch
    } = useForm({
        defaultValues:{
            rating: 0,
            headline: "",
            review: "",
            recommend: ""
        }
    });

    const recommend = watch("recommend");

    const product = productData?.data;
    if (isLoading) {
        return <Text>Loading...</Text>;
    }
    if (error) {
        return <Text>Error loading product</Text>;
    }
    
    //backend creates a timestamp, frontend formats it new Date(reviews.createdAt).toLocaleDateString()

    const onSubmit = async (data) => {
        try{
            const response = await createReview({
                productId,
                ...data
            }).unwrap();
            console.log("Review created:", response);
            reset();
        } catch (error) {
            console.error("Failed to create review:", error);
            //if not logged in offer to log in
        }
    }

    return(
        <form className={styles.mainContainer} onSubmit={handleSubmit(onSubmit)}>
            <Stack direction="column" align="center" gap={8} className={styles.text}>
                <Text size={32} className={styles.header}>Rate & Review</Text>
                <Text size={22}>You are helping us to make our service better!</Text>
                <Text size={22}>You are helping our customers to choose the right product!</Text>
            </Stack>
            <Stack className={styles.reviwContainer}>
                <Stack justify="center" className={styles.imageContainer}>
                    <img src={product.image} className={styles.image} alt="image"/>
                </Stack>
            
                <Stack direction="column" gap={12} className={styles.inputContainer}>
                    <Text size={22} color="green" className={styles.name}>{product.name} from {product.manufactor}</Text>
                    <hr className={styles.line}/>
                    <Text  size={22} color="green">Rate this product</Text>

                    <Controller
                        name = "rating"
                        control = {control}
                        rules = {{
                            min: {
                                value: 1,
                                message: "Please select a rating"
                            }
                        }}
                        render = {({field}) => (
                            <StarsReviewVote
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                        error = {errors.rating}
                    />
                    {errors.rating && <Text color="grey" size={14}  className={styles.validation}>{errors.rating.message}</Text>}
                
                    <Input {...register("headline", {
                            required: false,
                            maxLength: { value: 50, message: "Maximun 50 characters" }
                        })}
                        label="Headline(optional)" 
                        fullWidth
                        placeholder="Add a headline" 
                        error={errors.headline}
                    />
                    {errors.headline && <Text color="grey" size={14}  className={styles.validation}>{errors.headline.message}</Text>}

                    <Input {...register("review", {
                            required: true,
                            minLength: { value: 50, message: "Minimun 50 characters" }
                        })}
                        label="Review" 
                        fullWidth 
                        required
                        placeholder="What Should Other Customers Know?"
                        multiline="true"
                        rows={8}
                        error={errors.review}
                    />
                    {errors.review && <Text color="grey" size={14}  className={styles.validation}>{errors.review.message}</Text>}
                
                    <Text size={22} color="green">Would you recommend this product?</Text>
                    <Stack gap={24} className={styles.buttons}>
                        <label className={recommend === "yes" ? styles.selected : ""}>
                            <input
                                type="radio"
                                value="yes"
                                {...register("recommend", {required: "Please select the recommendation"})}
                                errors={errors.recommend}
                            />
                            Yes
                        </label>

                        <label className={recommend === "no" ? styles.selected : ""}>
                            <input
                                type="radio"
                                value="no"
                                {...register("recommend", {required: "Please select the recommendation"})}
                                error={errors.recommend}
                            />
                            No
                        </label>
                    </Stack>
                    
                    {errors.recommend && <Text color="grey" size={14}  className={styles.validation}>{errors.recommend.message}</Text>}
                    <hr className={styles.line}/>
                    <Button type="submit">
                        {isCreatingReview ? "Submitting..." : "Submit Review"}
                    </Button>
                </Stack>
            </Stack>
            {/* <Text fontStyle="alexbrush" size={28}>Thank you for taking time and leaving the review for our products!</Text> */}
        </form>
    )
}

export default Review;