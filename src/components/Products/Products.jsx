import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductsCard from './ProductCard';
import styles from '../../styles/Poducts.module.css';

const Products = () => {
   const dataTrending = useSelector(state => state.products.list);
   console.log(dataTrending);
   return (
      <section>
         <h2>Trending</h2>
         <div className={styles.trending_wrapper}>
            <ul className={styles.trending_list}>
               {dataTrending.map(({ price, category, id }) => (
                  <li className={styles.trending_list_item} key={id}>
                     <Link className={styles.product_wrapper}>
                        <ProductsCard price={price} category={category} />
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </section>
   );
};

export default Products;
