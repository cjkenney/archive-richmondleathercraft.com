import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import SkuCard from './SkuCard';

export default props => (
  <StaticQuery
    query={graphql`
      query SkusForProduct {
        skus: allStripeSku {
          edges {
            node {
              id
              currency
              price
              product {
                name
              }
            }
          }
        }
      }
    `}
    render={({ skus }) => (
      <div>
        {skus.edges.map(({ node: sku }) => (
          <SkuCard key={sku.id} title={sku.product.name} price={sku.price} />
        ))}
      </div>
    )}
  />
);
