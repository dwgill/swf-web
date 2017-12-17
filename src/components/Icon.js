import React from 'react';
import classnames from 'classnames';
import styles from './Icon.scss';

const iconSizes = {
  s: '1em',
  m: '1.33em',
  l: '2em',
  xl: '3em',
};

const boxSizes = {
  s: styles.iconBoxSizeSmall,
  m: null,
  l: styles.iconBoxSizeLarge,
  xl: styles.iconBoxSizeExtraLarge,
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
      className={classnames(styles.iconBox, boxSizes[boxSize], className, {
        [styles.left]: left,
        [styles.right]: right,
      })}
    >
      <InnerIcon size={iconSizes[size]} color={color} />
    </div>
  );
};

export default Icon;
