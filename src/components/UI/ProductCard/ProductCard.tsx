import styles from './ProductCard.module.scss';
import { RiAddLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Products } from '../../../types/products';

interface IProductsCard {
  item: Pick<Products, 'id' | 'category' | 'imgUrl' | 'productName' | 'price'>;
}

export const ProductCard = ({ item }: IProductsCard) => {
  return (
    <div className={styles.productItem}>
      <div className={styles.productImg}>
        <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt={item.productName} />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>
          <Link to={`/shop/${item.id}`}>{item.productName}</Link>
        </h3>
        <span>{item.category}</span>
      </div>
      <div className={styles.productCardBottom}>
        <span className={styles.price}>${item.price}</span>
        <motion.span whileTap={{ scale: 1.2 }}>
          <RiAddLine />
        </motion.span>
      </div>
    </div>
  );
};
