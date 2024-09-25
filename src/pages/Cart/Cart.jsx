import { useSelector, useDispatch } from 'react-redux';
import { changeQuantity, removeFromCart } from '../../redex/cartSlice';
import { useState, useEffect } from 'react';

import styles from '../Cart/Cart.module.css';

const Cart = () => {
   const { list } = useSelector(state => state.cart);

   const [total, setTotal] = useState({
      count: list.reduce((prev, curr) => prev + curr.quantity, 0),
      price: list.reduce((prev, curr) => prev + curr.price * curr.quantity, 0),
   });

   const dispatch = useDispatch();
   console.log(list);

   useEffect(() => {
      setTotal({
         count: list.reduce((prev, curr) => prev + curr.quantity, 0),
         price: list.reduce(
            (prev, curr) => prev + curr.price * curr.quantity,
            0,
         ),
      });
   }, [list]);

   // Функция для изменения количества товара
   const handleQuantityChange = (productId, newQuantity) => {
      dispatch(changeQuantity({ productId, newQuantity }));
   };

   const handleRemove = productId => {
      dispatch(removeFromCart({ productId }));
   };

   return (
      <section className={styles.cart}>
         <h4 className={styles.title}>Cart</h4>
         <div className={styles.container_product_info}>
            <span>Name</span>
            <span>Count</span>
            <span>Cost</span>
         </div>
         {list.map(product => (
            <div className={styles.container_product_card}>
               <div className={styles.image_container}>
                  <img src={product.image} alt={product.title} />
               </div>
               <div className={styles.quantity_controls}>
                  <button
                     onClick={() => {
                        handleQuantityChange(product.id, product.quantity - 1);
                     }}
                     className={styles.plus_btn}
                     type="button"
                  >
                     -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                     onClick={() => {
                        handleQuantityChange(product.id, product.quantity + 1);
                     }}
                     type="button"
                  >
                     +
                  </button>
               </div>
               <span className={styles.price}>{product.price}</span>
               <button
                  onClick={() => {
                     handleRemove(product.id);
                  }}
                  className={styles.btn_delete}
                  type="button"
               >
                  delete
               </button>
            </div>
         ))}
         <div className={styles.cart_summary}>
            <span className={styles.count_product}>{total.count}</span>
            <span className={styles.count_price}>{total.price}</span>
         </div>
      </section>
   );
};

export default Cart;
