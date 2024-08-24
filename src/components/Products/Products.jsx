import { Link } from 'react-router-dom';
import ProductsCard from '../UI/ProducrtCard/ProductCard';
import styles from '../Products/Poducts.module.css';

const Products = ({ products = [], title, amount }) => {
   const list = products.filter((_, i) => i < amount);
   return (
      <section className={styles.Product}>
         <h2 className={styles.products_title}>{title}</h2>
         <div className={styles.trending_wrapper}>
            <ul className={styles.trending_list}>
               {list.map(trend => (
                  <li className={styles.trending_list_item} key={trend.id}>
                     <Link className={styles.product_wrapper}>
                        <ProductsCard data={trend} />
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </section>
   );
};

export default Products;
