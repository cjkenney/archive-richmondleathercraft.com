import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

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
          <p key={sku.id}>
            {sku.product.name} ${sku.price}
          </p>
        ))}
      </div>
    )}
  />
);
