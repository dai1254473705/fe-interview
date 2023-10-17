import React, { type FC } from 'react';
import './demo.css';

const Demo: FC = () => {
  return <div className="css-demo-1"></div>;
};
/**
 * 当margin/padding取形式为百分比的值时，无论是left/right，还是top/bottom，都是以父元素的width为参照物的
 */
export default Demo;
