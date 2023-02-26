import { Container } from '../components/Container/Container';
import styles from './Services.module.scss';
import serviceData from '../assets/data/serviceData';
import { motion } from 'framer-motion';

export const Services = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        {serviceData.map((item) => {
          const { Icon } = item;
          return (
            <motion.div
              whileHover={{ scale: 1.08 }}
              className={styles.serviceItem}
              key={item.title}
              style={{ backgroundColor: item.bg }}>
              <span>
                <Icon />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
};
