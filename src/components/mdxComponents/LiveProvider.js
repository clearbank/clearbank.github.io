import * as React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import CopyCodeButton from '../copy-code-button/copy-code-button'

const ReactLiveProvider = ({ code }) => {
  const [currentCode, setCurrentCode] = React.useState(code)

  React.useEffect(() => {
    setCurrentCode(code)
  }, [code])

  return (
    <LiveProvider code={currentCode}>
      <div className='code-block-actions'>
        <CopyCodeButton text={currentCode} />
      </div>
      <LiveEditor onChange={setCurrentCode} />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  )
}

export default ReactLiveProvider