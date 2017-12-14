import React from 'react';
import classnames from 'classnames';
import bulma from '../bulma.scss';

const colorClass = {
  primary: bulma.isPrimary,
  link: bulma.isLink,
  info: bulma.isInfo,
  success: bulma.isSuccess,
  warning: bulma.isWarning,
  danger: bulma.isDanger,
  dark: bulma.isDark,
  light: bulma.isLight,
};

const sizeClass = {
  medium: bulma.isMedium,
  large: bulma.isLarge,
  fullheight: bulma.isFullheight,
};

const Banner = ({
  children,
  type = '',
  size = 'small',
  bold,
  shiftDown,
  className,
}) => {
  const bannerClasses = classnames(
    bulma.hero,
    colorClass[type.toLowerCase()],
    sizeClass[size.toLowerCase()],
    bold ? bulma.isBold : '',
    className
  );

  if (children.length >= 3) {
    const [headChild, bodyChild, footChild] = children;
    return (
      <section className={bannerClasses}>
        <div className={bulma.heroHead}>{headChild}</div>
        <div className={bulma.heroBody}>{bodyChild}</div>
        <div className={bulma.heroFoot}>{footChild}</div>
      </section>
    );
  } else if (children.length == 2) {
    const [first, second] = children;
    return (
      <section className={bannerClasses}>
        <div className={shiftDown ? bulma.heroBody : bulma.heroHead}>
          {first}
        </div>
        <div className={shiftDown ? bulma.heroFoot : bulma.heroBody}>
          {second}
        </div>
      </section>
    );
  } else {
    return (
      <section className={bannerClasses}>
        <div className={bulma.heroBody}>{children}</div>
      </section>
    );
  }
};

export default Banner;
