import { createContext, useContext, useState } from "react";
import Data from '../data/data.json';

const FilterContext = createContext();
export const useFilter = () => useContext(FilterContext);

/**
 * @param {Array} categories
 */
export const filterCategories = (categories) => {
    return [...Data].filter(item => categories.includes(item.category));
}

export const removeCategory = (categories, selectedCategory) => {
    return [...categories.filter(category => category !== selectedCategory)]
}

export const FilterProvider = ({ children }) => {
    const [filter, setFilter] = useState([...Data]);
    const [open, setOpen] = useState(false);
    const [navigation, setNavigation] = useState(false);

    return (
        <FilterContext.Provider value={{
            filter,
            setFilter,
            open,
            setOpen,
            navigation,
            setNavigation
        }}>
            {children}
        </FilterContext.Provider>
    )
}