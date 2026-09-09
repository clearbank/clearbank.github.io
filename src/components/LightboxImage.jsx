import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import * as Styles from './mdxComponents/mdx-components.styles'

import 'yet-another-react-lightbox/styles.css'
import './styles.css'

const LightboxImage = props => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Styles.Img
        {...props}
        onClick={() => setOpen(true)}
        style={{ cursor: 'zoom-in' }}
      />

      <Lightbox
        className='docs-lightbox'
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 50,
          zoomInMultiplier: 2,
          doubleClickMaxStops: 0,
          scrollToZoom: true
        }}
        slides={[
          {
            src: props.src,
            alt: props.alt
          }
        ]}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null
        }}
        styles={{
          container: {
            backgroundColor: '#ffffff'
          },
          button: {
            color: '#8E8E8E'
          },
          icon: {
            color: '#8E8E8E'
          }
        }}
      />
    </>
  )
}

export default LightboxImage