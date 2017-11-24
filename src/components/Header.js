import React from 'react';
import classnames from  'classnames';
import bulma from 'bulma.css';

const titles = {
  1: (text) => <h1 className={classnames(bulma.title, bulma.is1)}>{text}</h1>,
  2: (text) => <h2 className={classnames(bulma.title, bulma.is2)}>{text}</h2>,
  3: (text) => <h3 className={classnames(bulma.title, bulma.is3)}>{text}</h3>,
  4: (text) => <h4 className={classnames(bulma.title, bulma.is4)}>{text}</h4>,
  5: (text) => <h5 className={classnames(bulma.title, bulma.is5)}>{text}</h5>,
  6: (text) => <h6 className={classnames(bulma.title, bulma.is6)}>{text}</h6>,
}

const subtitles = {
  1: (text) => <h1 className={classnames(bulma.subtitle, bulma.is1)}>{text}</h1>,
  2: (text) => <h2 className={classnames(bulma.subtitle, bulma.is2)}>{text}</h2>,
  3: (text) => <h3 className={classnames(bulma.subtitle, bulma.is3)}>{text}</h3>,
  4: (text) => <h4 className={classnames(bulma.subtitle, bulma.is4)}>{text}</h4>,
  5: (text) => <h5 className={classnames(bulma.subtitle, bulma.is5)}>{text}</h5>,
  6: (text) => <h6 className={classnames(bulma.subtitle, bulma.is6)}>{text}</h6>,
}

const Header = ({titleText, subtitleText, size=3}) => {
  const titleSize = Math.max(1, Math.min(size, 6));
  const subSize = Math.min(titleSize+2, 6);
  if (titleText && subtitleText) {
    return (
      <div>
        {titles[titleSize](titleText)}
        {subtitles[subSize](subtitleText)}
      </div>
    );
  } else if (titleText) {
    return titles[titleSize](titleText);
  } else if (subtitleText) {
    return subtitles[subSize](subtitleText);
  } else {
    return titles[1]('');
  }
};

export default Header;
