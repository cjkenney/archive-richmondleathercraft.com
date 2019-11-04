import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './Header.scss';

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Link to='/products'>Products</Link>
      <Link to='/about'>About</Link>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
