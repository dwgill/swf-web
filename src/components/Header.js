import React from 'react';
import classnames from 'classnames';
import bulma from 'bulma.css';

const titles = {
  1: (text, ...className) => (
    <h1 className={classnames(bulma.title, bulma.is1, className)}>{text}</h1>
  ),
  2: (text, ...className) => (
    <h2 className={classnames(bulma.title, bulma.is2, className)}>{text}</h2>
  ),
  3: (text, ...className) => (
    <h3 className={classnames(bulma.title, bulma.is3, className)}>{text}</h3>
  ),
  4: (text, ...className) => (
    <h4 className={classnames(bulma.title, bulma.is4, className)}>{text}</h4>
  ),
  5: (text, ...className) => (
    <h5 className={classnames(bulma.title, bulma.is5, className)}>{text}</h5>
  ),
  6: (text, ...className) => (
    <h6 className={classnames(bulma.title, bulma.is6, className)}>{text}</h6>
  ),
};

const subtitles = {
  1: (text, ...className) => (
    <p className={classnames(bulma.subtitle, bulma.is1, className)}>{text}</p>
  ),
  2: (text, ...className) => (
    <p className={classnames(bulma.subtitle, bulma.is2, className)}>{text}</p>
  ),
  3: (text, ...className) => (
    <p className={classnames(bulma.subtitle, bulma.is3, className)}>{text}</p>
  ),
  4: (text, ...className) => (
    <p className={classnames(bulma.subtitle, bulma.is4, className)}>{text}</p>
  ),
  5: (text, ...className) => (
    <p className={classnames(bulma.subtitle, bulma.is5, className)}>{text}</p>
  ),
  6: (text, ...className) => (
    <p className={classnames(bulma.subtitle, bulma.is6, className)}>{text}</p>
  ),
};

const Header = ({
  titleText,
  subtitleText,
  size = 3,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}) => {
  const titleSize = Math.max(1, Math.min(size, 6));
  const subSize = Math.min(titleSize + 2, 6);
  if (titleText && subtitleText) {
    return (
      <div className={className}>
        {titles[titleSize](titleText, titleClassName)}
        {subtitles[subSize](subtitleText, subtitleClassName)}
      </div>
    );
  } else if (titleText) {
    return titles[titleSize](titleText, titleClassName, className);
  } else if (subtitleText) {
    return subtitles[subSize](
      subtitleText,
      subtitleClassName,
      className,
      titleClassName
    );
  } else {
    return null;
  }
};

export default Header;
