import * as React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

import CopyCodeButton from '../copy-code-button/copy-code-button'

const ReactLiveProvider = ({ code, copyCode = true }) => {
  const [currentCode, setCurrentCode] = React.useState(code)

  React.useEffect(() => {
    setCurrentCode(code)
  }, [code])

  return (
    <LiveProvider code={currentCode}>
      <div className='code-block'>
        {copyCode && (
          <CopyCodeButton text={currentCode} overlay />
        )}
        <LiveEditor onChange={setCurrentCode} />
      </div>
      <LiveError />
      <LivePreview />
    </LiveProvider>
  )
}

export default ReactLiveProvider