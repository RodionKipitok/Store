import { Link } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';
import styles from '../../styles/Header.module.css';

import AVATAR from '../../images/avatar.jpg';
import LOGO from '../../images/logo.svg';
console.log(styles);

const Header = () => {
   return (
      <div className={styles.header}>
         <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
               <img src={LOGO} alt="stuff" />
            </Link>
         </div>

         <div className={styles.info}>
            <div className={styles.avatar}>
               <img src={AVATAR} alt="" srcset="" />
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
                  type="search"
                  name="search"
                  placeholder="Search for anything.."
                  autoComplete="off"
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
            <Link>
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
