import styles from '../Cart/Cart.module.css';
import imgProduct from '..//../images/computer.png';
const Cart = () => {
   return (
      <section className={styles.cart}>
         <h4 className={styles.title}>Cart</h4>
         <div className={styles.container_product_info}>
            <span>Name</span>
            <span>Count</span>
            <span>Cost</span>
         </div>
         <div className={styles.container_product_card }>
            <div className={styles.image_container}>
               <img src={imgProduct} alt="" srcset="" />
            </div>
            <div className={styles.quantity_controls}>
               <button className={styles.plus_btn} type="button">-</button>
               <span>1</span>
               <button type="button">+</button>
            </div>
            <span className={styles.price}>price</span>
         </div>
         <div className={styles.cart_summary}>
            <span>count product</span>
            <span>count price</span>
         </div>
      </section>
   );
};

export default Cart;
