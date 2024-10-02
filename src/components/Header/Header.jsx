import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROUTES } from '../../utils/routes';
import Search from '../Search/Search';
import styles from '../Header/Header.module.css';
import LOGO from '../../images/logo.svg';

const Header = () => {
   const totalGoodsInCart = useSelector(state => state.cart.list);
   const like = useSelector(state => state.products.like);

   // console.log(totalGoodsInCart);

   return (
      <div className={styles.header}>
         <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
               <img src={LOGO} alt="stuff" />
            </Link>
         </div>

         <Search />
         <div className={styles.account}>
            <Link to="/like">
               <svg className={styles['icon-fav']}>
                  <use
                     xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}
                  />
               </svg>
               <span>{like.length}</span>
            </Link>
            <Link to="/cart">
               <svg className={styles['icon-cart']}>
                  <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
               </svg>
               <span className={styles.count}>{totalGoodsInCart.length}</span>
            </Link>
         </div>
      </div>
   );
};

export default Header;
