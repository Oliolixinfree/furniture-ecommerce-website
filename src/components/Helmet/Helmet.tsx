import React from 'react';
import { IHelmet } from './Helmet.props';

export const Helmet = ({ title, children }: IHelmet) => {
  document.title = 'Maltimar' + title;
  return <div>{children}</div>;
};
