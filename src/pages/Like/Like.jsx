import { useSelector } from 'react-redux';
import styles from '../Like/Like.module.css';

const Like = () => {
   const list = useSelector(state => state.products.like);

   console.log(list);
   return (
      <section className={styles.section_like}>
         <h4 className={styles.title}>Like</h4>
         <div className={styles.container_product_info}>
            <span>Name</span>
            <span>Cost</span>
         </div>
         {list.map(product => (
            <div className={styles.container_product_card}>
               <div className={styles.image_container}>
                  <img src={product.image} alt={product.title} />
               </div>
               <span className={styles.price}>{product.price}</span>
               <span>{product.quantity}</span>
               <button type="button" className={styles.add_to_cart}> add to cart</button>
            </div>
         ))}
      </section>
   );
};

export default Like;
