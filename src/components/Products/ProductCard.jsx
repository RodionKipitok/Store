import styles from '../../styles/Product-card.module.css';

const ProductsCard = ({ price, category }) => {
   const { name, image } = category;

   console.log(price, category);
   return (
      <article className={styles.product_card}>
         <div>
            <img className={styles.img_card} src={image} alt={name} />
         </div>
           <h3 className="card_title">{name}</h3>
           <p>{price}</p>
           <button>Buy</button>
      </article>
   );
};

export default ProductsCard;
