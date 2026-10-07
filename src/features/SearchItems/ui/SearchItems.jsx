import { Stack } from "@/shared/ui/Stack/Stack"
import { useDispatch, useSelector } from "react-redux";
import { getSearchQuery, searchInput } from "../model/searchSlice";
import styles from './SearchItems.module.scss';

const SearchItems = () => {
    const dispatch = useDispatch();
    const query = useSelector(getSearchQuery);

    return (
        <Stack>
            <input
                className={styles.input}
                placeholder="Search..."
                type='text'
                value={query}
                onChange={(e)=>dispatch(searchInput(e.target.value))}
            />
        </Stack>
    )
}
export default SearchItems;