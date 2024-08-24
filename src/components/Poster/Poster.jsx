import BG from '../../images/computer.png';
import styles from '../Poster/Poster.module.css';
const Poster = () => {
   return (
      <section className={styles.poster}>
         <div>
            <span className={styles.sale}>BIG SALE 20%</span>
         </div>
         <div>
            <span className={styles.text_bestseller}>
               the bestseller of 2024{' '}
            </span>
         </div>
         <div>
            <h1>LENNON r2d2 with NVIDIA 5090 TI</h1>
         </div>
         <button className={styles.btn_show_now}>Shop Now</button>
         <div className={styles.poster_img_computer}>
            <img src={BG} alt="" />
         </div>
      </section>
   );
};

export default Poster;
