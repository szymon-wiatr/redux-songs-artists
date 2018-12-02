import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ favorites, children, onClick }) => {
  if (favorites) {
    return <span>{children}</span>
  }

  return (
    <a
      href="/#"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  favorites: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;