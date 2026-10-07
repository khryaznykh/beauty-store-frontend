import { useDispatch } from "react-redux";
import { Button } from "@/shared/ui/Button/Button";
import { filterTag } from "../model/filterSlice";
import { useState } from "react";

function FilterItems({ tag, selectedTag }) {
    const dispatch = useDispatch();
    const isSelected = selectedTag === tag;
    

console.log(selectedTag, isSelected)
    const handleToggle =()=>{
        dispatch(filterTag(isSelected ? "" : tag))
    }

    return (
        <Button theme="nothing" onClick={handleToggle} active={isSelected}>
            {tag.toUpperCase()}
        </Button>
        
    )
}

export default FilterItems;
