import styles from '../ProducrtCard/Product-card.module.css';

const ProductsCard = ({ data }) => {
   const { image, price, title } = data;
   return (
      <div class={styles.product_card}>
         <div className={styles.image_container}>
            <img src={image} alt={title} />
         </div>
         <h2 class={styles.card_title}>{title}</h2>
         <p className={styles.price}>{price}</p>
         <p className={styles.people}>19 people purchased</p>
      </div>
   );
};

export default ProductsCard;
