import React from 'react';
import { Products } from '../../../types/products';
import { ProductCard } from '../ProductCard/ProductCard';
import styles from './ProductsList.module.scss';

interface IProductsList {
  data: Products[];
}

export const ProductsList = ({ data }: IProductsList) => {
  return (
    <div className={styles.wrapper}>
      {data.map((item) => (
        <ProductCard item={item} />
      ))}
    </div>
  );
};
