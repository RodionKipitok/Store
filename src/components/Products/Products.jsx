import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductsCard from './ProductCard';
import styles from '../../styles/Poducts.module.css';
import { useState } from 'react';

const Products = () => {
   const dataTrending = useSelector(state => state.products.list);
   const [showMoreTrending, setShowMoreTrending] = useState(5);
   console.log(dataTrending)

   const showMore = () => {
      setShowMoreTrending(prev => prev + 6);
   };

   return (
      <section>
         <h2 className={styles.products_title}>Trending</h2>
         <div className={styles.trending_wrapper}>
            <ul className={styles.trending_list}>
               {dataTrending.slice(0,showMoreTrending).map(trend => (
                  <li className={styles.trending_list_item} key={trend.id}>
                     <Link className={styles.product_wrapper}>
                        <ProductsCard data={trend} />
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
         <button onClick={showMore} className={styles.show_more}>Show more</button>
      </section>
   );
};

export default Products;
