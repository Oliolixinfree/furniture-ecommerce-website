import React from 'react';
import { Container } from '../components/Container/Container';
import styles from './Services.module.scss';
import serviceData from '../assets/data/serviceData';

export const Services = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        {serviceData.map((item, idx) => {
          const { Icon } = item;
          return (
            <div
              className={styles.serviceItem}
              key={item.title}
              style={{ backgroundColor: item.bg }}>
              <span>
                {/* <RiTruckLine /> */}
                <Icon />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
