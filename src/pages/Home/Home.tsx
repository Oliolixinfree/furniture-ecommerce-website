import { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import productImg from '../../assets/images/hero-img.png';
import counterImg from '../../assets/images/counter-timer-img.png';
import { Helmet } from '../../components/Helmet/Helmet';
import { Container } from '../../components/Container/Container';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Services } from '../../services/Services';
import { ProductsList } from '../../components/UI/ProductsList/ProductsList';
import products from '../../assets/data/products';
import { Products } from '../../types/products';
import { Clock } from '../../components/UI/Clock/Clock';

export const Home = () => {
  const year = new Date().getFullYear();

  const [trendingProducts, setTrendingProduct] = useState<Products[]>(products);
  const [bestSalesProducts, setBestSalesProducts] = useState<Products[]>(products);
  // const [mobileProducts, setMobileProducts] = useState<Products[]>(products);
  // const [wirelessProducts, setWirelessProducts] = useState<Products[]>(products);
  const [newArrivals, setNewArrivals] = useState<Products[]>(products);

  useEffect(() => {
    const filtredTrendingProducts = products.filter((item) => item.category === 'chair');
    const filtredBestSalesProducts = products.filter((item) => item.category === 'sofa');
    // const filtredMobileProducts = products.filter((item) => item.category === 'mobile');
    // const filtredWirelessProducts = products.filter((item) => item.category === 'wireless');
    const filterNewArrivals = products.filter(
      (item) => item.category === 'mobile' || item.category === 'wireless',
    );

    setTrendingProduct(filtredTrendingProducts);
    setBestSalesProducts(filtredBestSalesProducts);
    // setMobileProducts(filtredMobileProducts);
    // setWirelessProducts(filtredWirelessProducts);
    setNewArrivals(filterNewArrivals);
  }, []);

  return (
    <Helmet title={'-Home'}>
      <section className={styles.heroSection}>
        <Container>
          <div className={styles.contentWrapper}>
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

      <Services />

      <section className={styles.trendingProducts}>
        <Container>
          <h2 className={styles.sectionTitle}>Trending Products</h2>
          <ProductsList data={trendingProducts} />
        </Container>
      </section>

      <section className={styles.bestSales}>
        <Container>
          <h2 className={styles.sectionTitle}>Best Sales</h2>
          <ProductsList data={bestSalesProducts} />
        </Container>
      </section>

      <section className={styles.timerCount}>
        <Container>
          <div className={styles.timerCountWrapper}>
            <div>
              <div className={styles.clockTopContent}>
                <h4>Limited Offers</h4>
                <h3>Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button whileTap={{ scale: 1.2 }} className={styles.buyBtn}>
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </div>
            <div>
              <img src={counterImg} alt={counterImg} />
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.newArrivals}>
        <Container>
          <h2 className={styles.sectionTitle}>New Arrivals</h2>
          {/* <ProductsList data={mobileProducts} />
          <ProductsList data={wirelessProducts} /> */}
          <ProductsList data={newArrivals} />
        </Container>
      </section>
    </Helmet>
  );
};
