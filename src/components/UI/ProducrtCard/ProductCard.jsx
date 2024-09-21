import styles from '../ProducrtCard/Product-card.module.css';

const ProductsCard = ({ data }) => {
   const { image, price, title } = data;
   const discount = price - price * 0.09;
   return (
      <>
         <div
            className={styles.wrapper_img}
            style={{ backgroundImage: `url(${image})` }}
         ></div>
         <div  className={styles.wrapper_pos_text}>
            <h3 className={styles.card_title}>{title}</h3>

            <div className={styles.wrapper_cost}>
               <p className={styles.price}>{price}</p>
               <p className={styles.discount}>{discount.toFixed(2)}</p>
               <p className={styles.counter_watch_people}>
                  19 people purchased
               </p>
            </div>
         </div>
      </>
   );
};

export default ProductsCard;

// data

// category
// :
// "women's clothing"
// description
// :
// "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem"
// id
// :
// 18
// image
// :
// "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
// price
// :
// 9.85
// rating
// :
// {rate: 4.7, count: 130}
// title
// :
// "MBJ Women's Solid Short Sleeve Boat Neck V "
