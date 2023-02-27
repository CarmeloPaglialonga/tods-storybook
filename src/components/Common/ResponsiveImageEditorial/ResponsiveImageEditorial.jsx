import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

export const ResponsiveImageEditorial = ({ url, urlMobile, alt, key, title, cssClass }) => {

  useEffect(() => {
    //require('lazysizes/plugins/attrchange/ls.attrchange.js');
    //require('lazysizes/plugins/respimg/ls.respimg.js');
    //require('lazysizes');
  });

  const generateSrc = (url) => {
    const srcSet = `${url} 2x, ${url}&impolicy=noretina 1x`;
    return !isEmpty(url) ? srcSet : '/static/assets/images/image_not_found.jpg';
  }

  const srcSet = generateSrc(url);
  let source = <source srcSet={srcSet} key={`${title}_6001`} />;

  if (!isEmpty(urlMobile)) {
    const srcSetMobile = generateSrc(urlMobile);
    source = (
      <>
        <source srcSet={srcSet} key={`${title}_6002`} media="(min-width: 768px)" />
        <source srcSet={srcSetMobile} key={`${title}_6003`} />
      </>
    );
  }
  return (
    <picture>
      {source}
      <img src={url} alt={alt} className={cssClass} key={`${key}_base`} data-src={url} />
    </picture>
  )
};

ResponsiveImageEditorial.propTypes = {
  alt: PropTypes.string,
  url: PropTypes.string,
  urlMobile: PropTypes.string,
  cssClass: PropTypes.string,
  title: PropTypes.string,
  key: PropTypes.string,
};

ResponsiveImageEditorial.defaultProps = {
  alt: '',
  url: '',
  urlMobile: '',
  key: '',
  title: '',
  cssClass: '',
};
