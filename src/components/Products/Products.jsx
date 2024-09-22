import { Link } from 'react-router-dom';
import ProductsCard from '../UI/ProducrtCard/ProductCard';
import styles from '../Products/Poducts.module.css';

const Products = ({ products = [], title, amount }) => {
   const list = products.filter((_, i) => i < amount);
   return (
      <section className={styles.product}>
         <h2 className={styles.products_title}>{title}</h2>
         <div className={styles.trending_list}>
            {list.map(trend => (
               <Link
                  className={styles.product_link}
                  key={trend.id}
                  to={`/products/${trend.title}`}
               >
                  <ProductsCard data={trend} />
               </Link>
            ))}
         </div>
      </section>
   );
};

export default Products;
