import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveImageEditorial } from '../ResponsiveImageEditorial';

export const Article = ({ landscapeImage, title, alt}) => {

    
    return (
        <div className="Cover">
            <div className="lazyload-container">
                <ResponsiveImageEditorial url={landscapeImage} alt={alt} />
            </div>
            <div className="grid-container grid-left">
                <h1 className="offset-l-w1of12 h2 paragraph--up offset-l-0@md">{title}
                </h1>
            </div>
        </div>
    )
};

Article.propTypes = {
    landscapeImage: PropTypes.string.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string,
};

Article.defaultProps = {
    landscapeImage: '',
    alt: '',
    title: ''
};
