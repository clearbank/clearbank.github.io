import { useStaticQuery, graphql } from 'gatsby'

const PathRequestsQuery: React.FunctionComponent<any> = (): any => {
  const version = '_v1_Accounts'
  const query = graphql`
    query ResponsesQuery {
      allDataJson {
        edges {
          node {
            paths {
              _v1_Accounts {
                get {
                  produces
                  tags
                  responses {
                    _503 {
                      description
                      headers {
                        X_Correlation_Id {
                          description
                          type
                        }
                      }
                    }
                    _500 {
                      description
                    }
                    _403 {
                      description
                    }
                    _200 {
                      description
                      schema {
                        _ref
                      }
                      headers {
                        X_Correlation_Id {
                          description
                          type
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `

  // return new Promise((resolve, reject) =>
  //   resolve(
  //     graphql(`{${theQuery}}`).then(result => {
  //       if (result.errors) {
  //         console.error(result.errors);

  //         reject(result.errors);
  //       }

  //       return result;
  //     })
  //   )
  // );

  // const query = useStaticQuery(graphql(theQuery));

  return query
}

export default PathRequestsQuery
