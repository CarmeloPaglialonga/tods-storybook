import React from 'react';
import PropTypes from 'prop-types';

export const Slideshow = ({ }) => (
  <p className="pippo">
    <a className='pluto'>test</a>
    </p>
);

Slideshow.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Slideshow.defaultProps = {
  user: null,
};
