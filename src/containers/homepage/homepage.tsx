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

const ARTICLES = [
  {title: "Accounts", subtitle: "Find out more about the types of accounts you can create using our API", slug: "/docs/gbp-accounts/account-types"},
  {title: "UK payments", subtitle: "Everything you need to know to start connecting to the UK payment schemes through ClearBank", slug: "/docs/uk-payments/faster-payments"},
  {title: "Embedded banking", subtitle: "Learn more about our award winning embedded banking capabilities, purpose built for retail and SMB customers", slug: "/docs/embedded-banking/fscs-protected-deposits"},
  {title: "Multi-currency", subtitle: "Looking to send payments overseas? Here are the details on payments and accounts in different currencies", slug: "/docs/multi-currency/multi-currency-account-types"},
  {title: "Foreign exchange", subtitle: "Find out more about our FX trade capabilities", slug: "/docs/multi-currency/fx-trade"},
]

const GUIDES = [
  {title: "Endpoint lookup", iconSrc: CodeIcon, slug: "/docs/lookup/endpoint-lookup-table"},
  {title: "Webhook lookup", iconSrc: LinkIcon, slug: "/docs/lookup/webhook-lookup-table"}, /*
{title: "Allowed characters", iconSrc: CheckIcon},*/
]

const options = { year: 'numeric', month: 'long', day: 'numeric' }
const dateFormatter = (date: string) => (new Date(date)).toLocaleDateString('en-GB', options)

const Homepage: React.FC<any> = (props) => {
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
                href="/docs/api/getting-started"
                subtitle="Everything you need to know if you’re just starting your API development journey with us"
              />
              <Article
                iconSrc={ApiIcon}
                title="ClearBank API"
                href="/docs/api/overview"
                subtitle="Find out more about our market disrupting API"
              />
            </Styles.IntroductionContentWrapper>
          </Styles.IntroductionContainer>
          <ClientSection/>
        </Styles.Row>

            <Styles.SectionTitle>Helpful quick reference guides</Styles.SectionTitle>
            <Styles.SectionContainer>
          {GUIDES.map(item => (
                <Article href={item.slug} title={item.title} iconSrc={item.iconSrc} variant="secondary" key={item.title}/>
              ))}
            </Styles.SectionContainer>
        
            <Styles.SectionTitle>Existing user? Pickup where you left off</Styles.SectionTitle>
            <Styles.GitHubSectionContainer>
          <img src={GHIcon} alt="GitHub icon" />
              <Styles.GitHubSectionDescription>Latest GitHub pull requests</Styles.GitHubSectionDescription>
            </Styles.GitHubSectionContainer>

            <Styles.TableWrapper>
              <Styles.Table>
                <tbody>
              {
                props.data.github.repository.pullRequests.nodes
                  .filter(node => node.state === 'MERGED')
                  .map(node => (
                      <tr key={node.title}>
                        <Styles.TableTitleCell>
                          <a href={node.url} target="_blank" rel="noopener noreferrer">{node.title}</a>
                        </Styles.TableTitleCell>
                        <Styles.TableDateCell>{dateFormatter(node.createdAt)}</Styles.TableDateCell>
                      </tr>
                  ))
              }
                </tbody>
              </Styles.Table>
            </Styles.TableWrapper>
        
          <Styles.SectionContainer>
          {ARTICLES.map(item =>
              <Article
                href={item.slug}
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
              />
            )}
          </Styles.SectionContainer>
      </Styles.Page>
    </Layout>
  )
}

export default Homepage
