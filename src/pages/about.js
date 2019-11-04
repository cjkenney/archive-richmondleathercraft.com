import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => (
  <Layout>
    <SEO title='About' />
    <h1>About Richmond Leathercraft</h1>
    <p>
      Richmond Leathercraft provides quality handmade leather products, from
      wallets to bags.
    </p>
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
);

export default AboutPage;
