import { useStaticQuery, graphql } from 'gatsby'

export const getAllWebhooks = (): any => {
  const query = useStaticQuery(
    graphql`
      {
        allMdx(filter: { fields: {}, frontmatter: { webhook: { in: true } } }) {
          edges {
            node {
              fields {
                id
                title
              }
              fields {
                slug
                title
              }
              body
              frontmatter {
                version
                title
              }
            }
          }
        }
      }
    `
  )

  return query
}
