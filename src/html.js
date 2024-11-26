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
          {/* <!-- Google Tag Manager --> */}
          {/* <!-- Google Tag Manager --> */}
          <script
            dangerouslySetInnerHTML={{
            __html: `              
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-572ZBFR8');
              `
            }}
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
          <link rel='stylesheet' type='text/css' href='/lib/css/index.css' />

          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-572ZBFR8" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
          </noscript>
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
