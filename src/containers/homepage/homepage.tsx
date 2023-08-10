import React from 'react'
import { Layout } from 'src/components'

import Article from './article'
import ClientSection from './client-section'

import GetStartedIcon from '../../../static/assets/images/get-started-icon.png'
import ApiIcon from '../../../static/assets/images/api-icon.png'
// import CodeIcon from '../../../static/assets/images/Code.png'
// import LinkIcon from '../../../static/assets/images/Link.png'
// import CheckIcon from '../../../static/assets/images/Check.png'
import GHIcon from '../../../static/assets/images/GitHub-Mark 1.png'

import * as Styles from './homepage.styles'

const options = { year: 'numeric', month: 'long', day: 'numeric' } as Intl.DateTimeFormatOptions
const dateFormatter = (date: string) => (new Date(date)).toLocaleDateString('en-GB', options)

const Homepage: React.FC<any> = (props) => {
  const { pageContext } = props

  return (
    <Layout {...props} hideFooterNavigation>
      <Styles.Page className='page'>
        <Styles.PageTitle>Developer Portal</Styles.PageTitle>
        <Styles.PageSubTitle>At ClearBank, we're committed to providing you with the tools and support you need to bring your ideas to life.</Styles.PageSubTitle>

        <Styles.Row>
          <Styles.IntroductionContainer>
            <Styles.IntroductionTitle>
              First time here? <br/>
              Let’s get your API journey going.
            </Styles.IntroductionTitle>
            <Styles.IntroductionContentWrapper>
              <Article
                iconSrc={GetStartedIcon}
                title="Getting Started"
                href="/uk/docs/api/getting-started"
                subtitle="Everything you need to know if you’re just starting your API development journey with us"
              />
              <Article
                iconSrc={ApiIcon}
                title="ClearBank API"
                href="/uk/docs/api/overview"
                subtitle="Find out more about our market disrupting API"
              />
            </Styles.IntroductionContentWrapper>
          </Styles.IntroductionContainer>
          <ClientSection/>
        </Styles.Row>

        {pageContext?.guides?.length > 0 && (
          <>
            <Styles.SectionTitle>Helpful quick reference guides</Styles.SectionTitle>
            <Styles.SectionContainer>
              {pageContext.guides.map(item => (
                <Article title={item.title} iconSrc={item.iconSrc} variant="secondary" key={item.title}/>
              ))}
            </Styles.SectionContainer>
          </>
        )}
        
        {pageContext?.pullRequests?.length > 0 && (
          <>
            <Styles.SectionTitle>Existing user? Pickup where you left off</Styles.SectionTitle>
            <Styles.GitHubSectionContainer>
              <img src={GHIcon} alt="github icon" />
              <Styles.GitHubSectionDescription>Latest GitHub pull requests</Styles.GitHubSectionDescription>
            </Styles.GitHubSectionContainer>

            <Styles.TableWrapper>
              <Styles.Table>
                <tbody>
                  {pageContext.pullRequests.map(node => (
                      <tr key={node.title}>
                        <Styles.TableTitleCell>
                          <a href={node.url} target="_blank" rel="noopener noreferrer">{node.title}</a>
                        </Styles.TableTitleCell>
                        <Styles.TableDateCell>{dateFormatter(node.createdAt)}</Styles.TableDateCell>
                      </tr>
                    ))}
                </tbody>
              </Styles.Table>
            </Styles.TableWrapper>
          </>
          
        )}
        
        {pageContext?.articles?.length > 0 && (
          <Styles.SectionContainer>
            {pageContext.articles.map(item =>
              <Article
                href={item.slug}
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
              />
            )}
          </Styles.SectionContainer>
        )}
      </Styles.Page>
    </Layout>
  )
}

export default Homepage
