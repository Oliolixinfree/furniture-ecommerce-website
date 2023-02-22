import styles from './Layout.module.scss';
import { Routers } from '../../routers/Routers';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};
