import React from 'react';
import classnames from 'classnames';
import bulma from '../bulma.scss';
import styles from './Icon.scss';

const iconSizes = {
  s: '1em',
  m: '1.33em',
  l: '2em',
  xl: '3em',
};

const boxSizes = {
  s: bulma.isSmall,
  m: null,
  l: bulma.isMedium,
  xl: bulma.isLarge,
};

const Icon = ({
  size = 's',
  boxSize,
  left,
  right,
  icon,
  color = '',
  className = '',
}) => {
  size = size.toLowerCase();
  boxSize = boxSize || size;
  boxSize = boxSize.toLowerCase();
  const InnerIcon = icon;

  return (
    <div
      className={classnames(bulma.icon, boxSizes[boxSize], className, {
        [bulma.isLeft]: left,
        [bulma.isRight]: right,
      })}
    >
      <InnerIcon size={iconSizes[size]} color={color} />
    </div>
  );
};

export default Icon;
