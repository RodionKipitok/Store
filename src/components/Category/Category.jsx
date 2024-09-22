import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getCategoryProducts } from '../../redex/productSlise';

import Filter from '../UI/Filter/Filter';
import ProductsCard from '../UI/ProducrtCard/ProductCard';
import styles from '../Category/Category.module.css';

const Category = () => {
   const { id } = useParams();
   const dispatch = useDispatch();

   const productsCategory = useSelector(state => state.products.list);
   const filterValue = useSelector(state => state.products.filter);
   const { title: titleProduct, price_min, price_max } = filterValue;

   useEffect(() => {
      if (!id) return;

      dispatch(getCategoryProducts(id));
   }, [id, dispatch]);

   const filterProduct = productsCategory.filter(product => {
      const nameMatch =
         titleProduct.trim() === '' ||
         product.title.toLowerCase().includes(titleProduct.toLowerCase());
      const priceMatch =
         (price_min === '' || product.price >= price_min) &&
         (price_max === '' || product.price <= price_max);

      return nameMatch && priceMatch;
   });

   return (
      <section className={styles.category}>
         <h2 className={styles.products_title}>{id.toLocaleUpperCase()}</h2>
         <Filter />

         <div className={styles.category_list}>
            {filterProduct.map(category => (
               <Link
                  className={styles.category_link}
                  to={`/products/${category.title}`}
                  key={category.id}
               >
                  <ProductsCard data={category} />
               </Link>
            ))}
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
