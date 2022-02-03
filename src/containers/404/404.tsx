import React, { Component } from 'react'
import Logo from 'src/components/logo'
import Link from 'src/components/link'
import 'src/components/styles.css'

import { Button } from 'src/components/clearbank-ui'

import * as Styles from './404.styles'
export default class Doc extends Component {
  render() {
    return (
      <Styles.Container>
        <Styles.LogoWrapper to='/'>
          <Logo showDeveloperLogo inverted />
        </Styles.LogoWrapper>
        <Styles.ContentWrapper>
          <Styles.Content>
            <Styles.Title>Oops!</Styles.Title>
            <Styles.H2>Sorry, we can’t find the page you’re looking for. </Styles.H2>
            <p>Error code: 404</p>
            <Link to='/'>
              <Button
                type='primary'
                size='large'
              >
                Go home
                <i className='cb-icon-arrow-right' />
              </Button>
            </Link>
          </Styles.Content>
          <img src='/assets/images/404-disconnected-image.png' alt='' />
        </Styles.ContentWrapper>
      </Styles.Container>
    )
  }
}
