import { useSelector, useDispatch } from 'react-redux';

import { changeQuantity } from '../../redex/cartSlice';

import styles from '../Cart/Cart.module.css';
const Cart = () => {
   const { list } = useSelector(state => state.cart);
   const dispatch = useDispatch();

   // Функция для расчета общей стоимости

   const calculateTotalPrice = items => {
      return items.reduce(
         (total, item) => total + item.price * item.quantity,
         0,
      );
   };

   // Функция для изменения количества товара
   const handleQuantityChange = (productId, newQuantity) => {
      // console.log(productId);
      // console.log(newQuantity);

      dispatch(changeQuantity({ productId, newQuantity }));
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
            </div>
         ))}
         <div className={styles.cart_summary}>
            <span>count product</span>
            <span>count price</span>
            <span>{calculateTotalPrice(list)}</span>
         </div>
      </section>
   );
};

export default Cart;

// category
// :
// "men's clothing"
// description
// :
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// :
// 1
// image
// :
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price
// :
// 109.95
// rating
// :
// {rate: 3.9, count: 120}
// title
// :
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
