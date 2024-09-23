import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { addedProductInCart } from '../../redex/cartSlice';

import styles from '../SingleProduct/SingleProduct.module.css';

const SingleProduct = () => {
   const { id } = useParams();
   const dispatch = useDispatch();
   const nameProduct = id;
   const listProduct = useSelector(state => state.products.list);

   const dataCurrentProduct = listProduct.filter(product => {
      return product.title.toLowerCase().includes(nameProduct.toLowerCase());
   });
   

   const addedProductCart = () => {
      dispatch(addedProductInCart(dataCurrentProduct[0]));
   };

   return (
      <section>
         <div className={styles.wrapper_product_page}>
            <div className={styles.title}>
               <h3>{dataCurrentProduct[0].title}</h3>
               <p className={styles.description}>
                  {dataCurrentProduct[0].description}
               </p>
               <p className={styles.price}>{dataCurrentProduct[0].price}</p>

               <div className={styles.wrapper_btn}>
                  <button type="button" onClick={addedProductCart}>
                     Cart
                  </button>
                  <button className={styles.btn_like} type="button">
                     Like
                  </button>
               </div>
            </div>
            <div className={styles.wrapper_img}>
               <img
                  className={styles.img}
                  src={dataCurrentProduct[0].image}
                  alt={dataCurrentProduct[0].title}
               />
            </div>
         </div>
      </section>
   );
};

export default SingleProduct;
