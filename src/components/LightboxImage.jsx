import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import * as Styles from './mdxComponents/mdx-components.styles'

import 'yet-another-react-lightbox/styles.css'

const LightboxImage = (props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Styles.Img
        {...props}
        onClick={() => setOpen(true)}
        style={{ cursor: 'zoom-in' }}
      />

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 50,
          zoomInMultiplier: 2
        }}
        slides={[
          {
            src: props.src
          }
        ]}
        styles={{
          container: {
            backgroundColor: props.src?.toLowerCase().endsWith('.svg')
              ? '#ffffff'
              : 'rgba(0, 0, 0, 0.95)'
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