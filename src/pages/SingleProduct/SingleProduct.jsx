import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

import styles from '../SingleProduct/SingleProduct.module.css';

const SingleProduct = () => {
   const { id } = useParams();
   const nameProduct = id;
   const listProduct = useSelector(state => state.products.list);

   const dataCurrentProduct = listProduct.filter(product => {
      return product.title.toLowerCase().includes(nameProduct.toLowerCase());
   });

   const  addedProductCart = () => {
      
   }

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
                  <button type="button">Cart</button>
                  <button className={styles.btn_like} type="button">Like</button>
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

// category
// :
// "electronics"
// description
// :
// "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system"
// id
// :
// 9
// image
// :
// "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
// price
// :
// 64
// rating
// :
// {rate: 3.3, count: 203}
// title
// :
// "WD 2TB Elements Portable External Hard Drive - USB 3.0 "
