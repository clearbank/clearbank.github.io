import React, { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Check, Copy } from 'react-feather'

interface CopyCodeButtonProps {
  text: string
  overlay?: boolean
}

const CopyCodeButton: React.FC<CopyCodeButtonProps> = ({
  text,
  overlay = false
}) => {
  const [status, setStatus] = useState('')

  useEffect(() => {
    setStatus('')
  }, [text])

  useEffect(() => {
    if (!status) return

    const timeoutId = window.setTimeout(() => setStatus(''), 2500)
    return () => window.clearTimeout(timeoutId)
  }, [status])

  const copied = status === 'Code copied'

  return (
    <span
      className={`copy-code-control${overlay ? ' copy-code-control--overlay' : ''}`}
    >
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
        <button
          type='button'
          className='copy-code-button'
          aria-label='Copy code'
          title={copied ? 'Copied!' : 'Copy code'}
          data-state={copied ? 'copied' : 'idle'}
        >
          {copied
            ? <Check size={16} aria-hidden='true' />
            : <Copy size={16} aria-hidden='true' />}
        </button>
      </CopyToClipboard>
      <span role='status' aria-live='polite'>
        {status}
      </span>
    </span>
  )
}

export default CopyCodeButton