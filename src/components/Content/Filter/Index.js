import { useState, useLayoutEffect,  } from 'react';
import Data from '../../../data/data.json';
import { useFilter, filterCategories, removeCategory } from '../../../context/filter';

const Filter = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { setFilter } = useFilter();


  /**
   * @param {string} category
   * @param {boolean} isAdd
   */
  const handleFilter = (category, isAdd) => {
    if (isAdd) {
      setSelectedCategories([...selectedCategories, category]);
      return;
    }

    setSelectedCategories(removeCategory(selectedCategories, category));
  };

  useLayoutEffect(() => {
    setFilter([...filterCategories([...selectedCategories])])
  }, [selectedCategories, setFilter]);

  return (
    <>
      <div className="col-lg-5 mb-3 mb-lg-0">
        <aside className="filter">
          <div className="filter-title">
            <h3>Genre Filters</h3>
            <button type="button"></button>
          </div>
          <div className="filter-content">
            {[...new Set([...Data.map(item => item.category)])].map((category, index) => (
              <div className="filter-item" key={index}>
                <label htmlFor="">
                  <input type="checkbox" onChange={(event) => handleFilter(category, event.currentTarget.checked)} />
                  <span>{category}</span>
                </label>
              </div>
            ))}

          </div>
        </aside>
      </div>
    </>
  )
}

export default Filter    