import styles from './Home.module.scss';
import productImg from '../../assets/images/hero-img.png';
import { Helmet } from '../../components/Helmet/Helmet';
import { Container } from '../../components/Container/Container';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title={'-Home'}>
      <section className={styles.heroSection}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <p className={styles.subtitle}>Trending products in {year}</p>
              <h2>Make Your Interior More Minimalist & Modern</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet exercitationem
                architecto distinctio porro voluptatum autem reiciendis harum modi doloremque earum!
              </p>
              <motion.button whileTap={{ scale: 1.2 }} className={styles.shopBtn}>
                <Link to="/shop">Shop now</Link>
              </motion.button>
            </div>
            <div className={styles.heroImg}>
              <img src={productImg} alt={productImg} />
            </div>
          </div>
        </Container>
      </section>
    </Helmet>
  );
};
