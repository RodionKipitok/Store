

import CategoryCard from '../UI/CategoryCard/CategoryCard';
import styles from './Categories.module.css';

const Categories = ({ products = [], title, amount }) => {
   const categoryImages = [
      'https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlu4Ay_DGtShnyMMiY4jRB0NXH8VxNmN7nNCFUD2gBBZAQdmCcXEfzOoD7jt4LGoHwAs&usqp=CAU',
      'https://johnlewis.scene7.com/is/image/JohnLewis/mw-sum24-staples-blocks2-190424',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCDyjnUPSmiVgxl_Qtm2TndirhweXC-r8DA&s',
   ];

   const transformCategories = products.map((name, index) => {
      return { name, image: categoryImages[index] };
   });

   return (
      <section className={styles.Categories_section}>
         <h2>{title}</h2>
         <div className={styles.Categories_list}>
            {transformCategories.map(category => (
          
                  <CategoryCard
                     name={category.name}
                     image={category.image}
                     key={category.name}
                  />
            ))}
         </div>
      </section>
   );
};

export default Categories;
