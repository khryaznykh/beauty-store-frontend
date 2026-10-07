import { useSelector } from "react-redux";
import { tags } from "@/shared/lib/shopData/shopData";
import { Stack } from "@/shared/ui/Stack/Stack";
import styles from './BeautyStore.module.scss';
import { getSelectedTag } from "@/features/FilterItems/model/filterSlice";
import FilterItems from "@/features/FilterItems/ui/FilterItems";
import { getSearchQuery } from "@/features/SearchItems/model/searchSlice";
import { Link, useParams } from "react-router";
import { useGetAllProductsQuery } from "@/entities/ProductCard/api/ProductApi";
import { Text } from "@/shared/ui/Text/Text";
import ProductCard from "@/entities/ProductCard/ui/ProductCard";

const BeautyStore = () => {
    const selectedTag = useSelector(getSelectedTag);
    const searchTag = useSelector(getSearchQuery);
    const {
        data,
        isLoading,
        error
    } = useGetAllProductsQuery();

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
            <Text color="error">Error loading products</Text>
        </Stack>
        );
    }

    const products = data?.data || [];
    console.log(products)

    const filteredProducts = products.filter((shopItem) => {
        const matchesTag =
            !selectedTag ||
            selectedTag === "all" ||
            shopItem.tag.toLowerCase() === selectedTag.toLowerCase();

        const matchesSearch =
            !searchTag ||
            shopItem.name
                .toLowerCase()
                .includes(searchTag.toLowerCase());

        return matchesTag && matchesSearch;
    });

    return(
        <Stack direction='column' align='center'gap={48} className={styles.storeContainer}>
            <Stack justify='evenly' className={styles.filter}>
                {tags.map((tag, index)=>(
                    <FilterItems key={index} tag={tag} selectedTag={selectedTag}/>
                    ))
                }
            </Stack>
            <Stack gap={24} wrap justify="evenly" className={styles.shopItemContainer}>
                {filteredProducts
                    .map ((shopItem) =>                        
                        <ProductCard key={shopItem._id} shopItem = {shopItem}/>
                    )}
            </Stack>
        </Stack>
    )
}
export default BeautyStore;