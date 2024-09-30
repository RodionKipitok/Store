import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import styles from '..//../components/Search/Search.module.css';

const Search = () => {
   const [searchQuery, setSearchValue] = useState('');
   const productsList = useSelector(state => state.products.list);
   const handleChange = e => {
      setSearchValue(e.target.value);
   };

   const searchProduct = productsList.filter(product => {
      const productMatch =
         searchQuery.trim() === '' ||
         product.title.toLowerCase().includes(searchQuery.toLowerCase());

      return productMatch;
   });

   console.log(searchProduct.length);

   return (
      <div>
         <form className={styles.form}>
            <div>
               <svg className={styles.icon}>
                  <use
                     xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}
                  />
               </svg>
            </div>
            <div>
               <input
                  value={searchQuery}
                  type="search"
                  name="search"
                  placeholder="Search for anything.."
                  autoComplete="off"
                  onChange={handleChange}
               />
            </div>
         </form>
         <div
            className={`${styles.list_result_search} ${
               searchQuery.trim() === '' ? styles.list_result_search_Hidden : ''
            }`}
         >
            {searchProduct?.length === 0 ? (
               <p className={styles.item_list_result_search}>no result</p>
            ) : (
               <ul>
                  {searchProduct.map(item => (
                     <li
                        key={item.id}
                        className={styles.item_list_result_search}
                     >
                        <NavLink
                           className={styles.link_search_result}
                           onClick={() => {
                              setSearchValue('');
                           }}
                           to={`/products/${item.title}`}
                        >
                           {item.title}
                        </NavLink>
                     </li>
                  ))}
               </ul>
            )}
         </div>
      </div>
   );
};

export default Search;
