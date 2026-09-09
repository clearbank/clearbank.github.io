import React from 'react'

import * as DataRow from 'src/components/data-row/data-row.styles'

import CodeBlock from '../mdxComponents/codeBlock'
import AnchorTag from '../mdxComponents/anchor'
import * as Styles from '../mdxComponents/mdx-components.styles'

import defaultMDXComponents from '../mdxComponents/'

import '../styles.css'

export default {
  ...defaultMDXComponents,
  h1: (props) => (
    <Styles.H1
      as='h1'
      className='cannon'
      id={props.children.replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h2: (props) => (
    <Styles.Header
      as='h2'
      className='trafalga'
      id={props.children.replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h3: (props) => (
    <Styles.H3
      as='h3'
      className='paragon'
      id={props.children.replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h4: (props) => (
    <DataRow.BlockTitle
      as='h4'
      className='double-pica'
      id={props.children.replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h5: (props) => (
    <DataRow.Header
      as='h5'
      id={props.children.replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h6: (props) => (
    <Styles.Header
      as='h6'
      className='long-primer'
      id={props.children.replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  p: props => <Styles.Paragraph as='p' className='body-copy' {...props} />,
  pre: props => <Styles.Pre {...props} />,
  code: CodeBlock,
  a: props => <Styles.Link {...props} />,
  ul: props => <Styles.List className='list' {...props} />,
  ol: props => <Styles.List as='ol' className='list' {...props} />,
  li: props => <Styles.ListItem {...props} />,
  img: props => <Styles.Img {...props} />
}
