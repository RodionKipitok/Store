import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { ROUTES } from '../../utils/routes';
import styles from '../Header/Header.module.css';

import AVATAR from '../../images/avatar.jpg';
import LOGO from '../../images/logo.svg';

const Header = () => {
   const [searchQuery, setSearchValue] = useState('');
   const productsList = useSelector(state => state.products.list);

   const handleChange = e => {
      setSearchValue(e.target.value);
   };

   const searchProduct = productsList.filter(product => {
      const productMatch =
         searchQuery.trim() === '' ||
         product.title.toLowerCase().includes(searchQuery.toLowerCase());

      return productMatch;
   });

   console.log(searchProduct);

   return (
      <div className={styles.header}>
         <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
               <img src={LOGO} alt="stuff" />
            </Link>
         </div>

         <div className={styles.info}>
            <div className={styles.avatar}>
               <img src={AVATAR} alt="avatar" />
            </div>
            <div className={styles.username}>Anstoli MKSwkdsdgf</div>
         </div>

         <form className={styles.form}>
            <div>
               <svg className={styles.icon}>
                  <use
                     xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}
                  />
               </svg>
            </div>
            <div>
               <input
                  value={searchQuery}
                  type="search"
                  name="search"
                  placeholder="Search for anything.."
                  autoComplete="off"
                  onChange={handleChange}
               />
            </div>
         </form>

         <div className={styles.account}>
            <Link>
               <svg className={styles['icon-fav']}>
                  <use
                     xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}
                  />
               </svg>
            </Link>
            <Link to="/cart">
               <svg className={styles['icon-cart']}>
                  <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
               </svg>
               <span className={styles.count}></span>
            </Link>
         </div>
      </div>
   );
};

export default Header;
