import React, { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

interface CopyCodeButtonProps {
  text: string
}

const CopyCodeButton: React.FC<CopyCodeButtonProps> = ({ text }) => {
  const [status, setStatus] = useState('')

  useEffect(() => {
    setStatus('')
  }, [text])

  useEffect(() => {
    if (!status) return

    const timeoutId = window.setTimeout(() => setStatus(''), 2500)

    return () => window.clearTimeout(timeoutId)
  }, [status])

  return (
    <span className='copy-code-control'>
      <CopyToClipboard
        text={text}
        onCopy={(_, successful) => {
          setStatus(
            successful
              ? 'Code copied'
              : 'Copy failed. Select and copy the code manually.'
          )
        }}
      >
        <button type='button' className='copy-code-button'>
          Copy code
        </button>
      </CopyToClipboard>
      <span role='status' aria-live='polite'>
        {status}
      </span>
    </span>
  )
}

export default CopyCodeButton