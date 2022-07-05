import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

import * as Styles from './cookie-banner.styles'
import * as Types from './cookie-banner.types'

const CookieBanner: React.FunctionComponent<Types.CookieBannerProps> = (): JSX.Element => {
  const [hasConsentCookie, setHasConsentCookie] = useState<boolean>(true)

  useEffect((): void => {
    setHasConsentCookie(!!Cookies.get('consent'))
  }, [hasConsentCookie])

  const onClick = (): void => {
    Cookies.set('consent', true, { expires: 365 })
    setHasConsentCookie(true)
  }

  if (hasConsentCookie) {
    return null
  }

  return (
    <Styles.Container>
      <Styles.InnerContainer>
        <Styles.Copy>
          We use cookies to make your experience on our website better. By clicking on “Accept Cookies”, you are agreeing for cookies to be used. &nbsp;
          <Styles.Link href='https://www.clear.bank/cookie-policy'>More information</Styles.Link>
        </Styles.Copy>
        <Styles.CTA
          size='small'
          type='secondary'
          onClick={onClick}
          className=''
        >
          Accept cookies
        </Styles.CTA>
      </Styles.InnerContainer>
    </Styles.Container>
  )
}

export default CookieBanner
