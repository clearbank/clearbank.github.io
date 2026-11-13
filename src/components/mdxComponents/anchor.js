import * as React from 'react'

const AnchorTag = ({ children: link, className, title, target, rel, ...props }) => {
  const isDefinition = (className || '').split(' ').includes('glossary-link')

  if (link) {
    return (
      <a
        href={props.href}
        title={title}
        className={isDefinition ? 'glossary-link' : undefined}
        target={isDefinition ? '_blank' : '_self'}
        rel={isDefinition ? 'noopener noreferrer' : 'noopener'}
      >
        {link}
      </a>
    )
  } else {
    return null
  }
}

export default AnchorTag
