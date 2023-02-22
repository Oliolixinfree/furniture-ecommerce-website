import React from 'react';
import styles from './Container.module.scss';
import { IContainer } from './Container.props';

export const Container = ({ children }: IContainer) => {
  return <div className={styles.wrapper}>{children}</div>;
};
