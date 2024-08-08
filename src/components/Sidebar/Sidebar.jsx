import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
   const categories = useSelector(state => state.categories.list);

   return (
      <section className={styles.sidebar}>
         <h3 className={styles.title}>CATEGORIES</h3>
         <nav>
            <ul className={styles.list}>
               {categories.map(({ id, name }) => (
                  <li className={styles.list_item} key={id}>
                     <NavLink to={`/categories${id}`}>{name}</NavLink>
                  </li>
               ))}
            </ul>
         </nav>
         <div className={styles.sidebar_footer}>
            <NavLink>Help</NavLink>
            <NavLink>Terms & Conditions</NavLink>
         </div>
      </section>
   );
};

export default Sidebar;
