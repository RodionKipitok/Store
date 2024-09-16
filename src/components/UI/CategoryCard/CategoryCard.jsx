import { Link } from 'react-router-dom';
import styles from '../CategoryCard/CategoryCard.module.css';

const CategoryCard = ({ name, image }) => {
   // const handlerClick = () => {};

   return (
      <Link to={`/categories/${name}`} className={styles.Categories_item}>
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
