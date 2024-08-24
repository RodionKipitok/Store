import { Link } from 'react-router-dom';
import styles from '../CategoryCard/CategoryCard.module.css';

const CategoryCard = ({ name, image }) => {
   console.log(name);
   return (
      <Link className={styles.Categories_item} key={name}>
         <div
            className={styles.Categories_image}
            style={{
               backgroundImage: `url(${image})`,
            }}
         ></div>
         <h3>{name}</h3>
      </Link>
   );
};

export default CategoryCard;
