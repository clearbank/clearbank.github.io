import React from 'react'
import PropTypes from 'prop-types'
import config from '../config'

export default class HTML extends React.Component {
  render () {
    return (
      <html {...this.props.htmlAttributes} lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          {config.siteMetadata.ogImage ? (
            <meta property='og:image' content={config.siteMetadata.ogImage} />
          ) : null}
          <meta property='twitter:card' content='summary_large_image' />
          {config.siteMetadata.ogImage ? (
            <meta
              property='twitter:image'
              content={config.siteMetadata.ogImage}
            />
          ) : null}
          {config.siteMetadata.favicon ? (
            <link
              rel='shortcut icon'
              type='image/svg'
              href={config.siteMetadata.favicon}
            />
          ) : null}
          <noscript key='noscript' />
          <link rel='stylesheet' type='text/css' href='/lib/css/index.css' />

          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key='body'
            id='___gatsby'
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script
            defer
            dangerouslySetInnerHTML={{
              __html: `
            function navBarClose() {
              if (document.getElementById("navbar") !== null) {
                document.getElementById("navbar").classList.toggle("responsive");
                }
            }
            document.addEventListener('click',function(e){
              if(e.target && e.target.tagName.toLowerCase() === 'a'){
                navBarClose();
              }
            });
            `
            }}
          />
          <script async src='https://www.googletagmanager.com/gtag/js?id=UA-92770333-2' />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-92770333-2');
            `
            }}
          />
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
