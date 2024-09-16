import { Link } from 'react-router-dom';
import ProductsCard from '../UI/ProducrtCard/ProductCard';
import styles from '../Products/Poducts.module.css';

const Products = ({ products = [], title, amount }) => {
   const list = products.filter((_, i) => i < amount);
   return (
      <section>
         <h2 className={styles.products_title}>{title}</h2>

         <ul className={styles.trending_list}>
            {list.map(trend => (
               <li className={styles.trending_list_item} key={trend.id}>
                  {console.log(trend)}
                  <Link to={`/products/${trend.title}`}>
                     <ProductsCard data={trend} />
                  </Link>
               </li>
            ))}
         </ul>
      </section>
   );
};

export default Products;

{
   /* <Link to={``} className={styles.product_wrapper}>
                      
                      </Link> */
}
