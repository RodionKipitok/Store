import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import LOGO from '../../images/logo.svg';
import stylesFooter from '../Footer/Footer.module.css';
const Footer = () => {
   return (
      <footer>
         <section className={stylesFooter.footer}>
            <Link className={stylesFooter.link_logo} to={ROUTES.HOME}>
               <img src={LOGO} alt="stuff" />
            </Link>
         
         </section>
      </footer>
   );
};

export default Footer;
