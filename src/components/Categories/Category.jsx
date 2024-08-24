import { useParams } from 'react-router-dom';

import Filter from '../UI/Filter/Filter';

import styles from '../Products/Poducts.module.css';

const Category = () => {
   const { id } = useParams();

   console.log(id);

   return (
      <section>
         <h2 className={styles.products_title}>Category</h2>
         <Filter />

         <div className={styles.trending_wrapper}>
            <ul className={styles.trending_list}></ul>
         </div>
      </section>
   );
};

export default Category;

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
