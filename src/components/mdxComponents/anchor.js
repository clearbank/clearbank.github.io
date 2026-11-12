import * as React from 'react'

const AnchorTag = ({ children: link, className, title, ...props }) => {
  const isDefinition = (className || '').split(' ').includes('glossary-link')

  if (link) {
    return (
      <a
        href={props.href}
        title={title}
        className={isDefinition ? 'glossary-link' : undefined}
        target='_self'
        rel='noopener'
      >
        {link}
      </a>
    )
  } else {
    return null
  }
}

export default AnchorTag