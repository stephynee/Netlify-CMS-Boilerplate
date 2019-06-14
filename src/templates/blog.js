import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const blogTemplate = () => {
  const data = useStaticQuery(query);
  const { title } = data.markdownRemark.frontmatter;

  return <h1>{ title }</h1>;
};

const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
    }
  }
`;

export default blogTemplate;