import React from 'react'
import { Layout } from 'src/components'

import Article from './article'
import ClientSection from './client-section'

import GetStartedIcon from '../../../static/assets/images/get-started-icon.svg'
import ApiIcon from '../../../static/assets/images/api-icon.svg'
import CodeIcon from '../../../static/assets/images/code-icon.svg'
import LinkIcon from '../../../static/assets/images/link-icon.svg'
// import CheckIcon from '../../../static/assets/images/check-icon.svg'
import GHIcon from '../../../static/assets/images/github-icon.png'

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
              {pageContext.intros.map(item =>
                <Article
                  href={item.href}
                  key={item.title}
                  title={item.title}
                  subtitle={item.subtitle}
                  iconSrc={item.iconSrc === 'GetStartedIcon' ? GetStartedIcon : item.iconSrc === 'ApiIcon' ? ApiIcon : ''}
                />
              )}
            </Styles.IntroductionContentWrapper>
          </Styles.IntroductionContainer>
          <ClientSection />
        </Styles.Row>

        {pageContext.guides?.length > 0 && (
          <>
            <Styles.SectionTitle>Helpful quick reference guides</Styles.SectionTitle>
            <Styles.SectionContainer>
              {pageContext.guides.map(item => (
                <Article href={item.slug} title={item.title} iconSrc={item.iconSrc === 'CodeIcon' ? CodeIcon : item.iconSrc === 'LinkIcon' ? LinkIcon : ''} variant="secondary" key={item.title}/>
              ))}
            </Styles.SectionContainer>
          </>
        )}

        {pageContext?.pullRequests?.length > 0 && (
          <>
            <Styles.SectionTitle>Existing user? Pick up where you left off</Styles.SectionTitle>
            <Styles.GitHubSectionContainer>
              <img src={GHIcon} alt="GitHub icon" />
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
                        <Styles.TableDateCell>{dateFormatter(node.mergedAt)}</Styles.TableDateCell>
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
