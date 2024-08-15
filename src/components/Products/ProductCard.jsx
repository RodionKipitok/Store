import styles from '../../styles/Product-card.module.css';

const ProductsCard = ({ data }) => {
   const { category, description, id, image, price, rating, title } = data;
   const discount = price - price * 0.09;
   return (
      <article className={styles.product_card}>
         <div className={styles.wrapper_img}>
            <img className={styles.img_card} src={image} alt={category} />
         </div>
         <h3 className={styles.card_title}>{category}</h3>
         
         <div className={styles.wrapper_cost}>
            <p className={styles.price}>{price}</p>
            <p className={styles.discount}>{discount.toFixed(2)}</p>
         </div>
         <p className={styles.counter_watch_people}>19 people purchased</p>
        
      </article>
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
