import React from 'react'
import CodeBlock from './codeBlock'
import '../styles.css'

import kebabCase from 'lodash.kebabcase'

import * as Styles from './mdx-components.styles'
import * as Table from 'src/components/table/table.styles'

export default {
  h1: props => (
    <Styles.H1
      as='h1'
      data-id={kebabCase(props.children.toLowerCase())}
      {...props}
    />
  ),
  h2: props => (
    <Styles.H2
      as='h2'
      className='cannon page-menu-entry'
      id={kebabCase(props.children.toLowerCase())}
      data-id={kebabCase(props.children.toLowerCase())}
      {...props}
    />
  ),
  h3: props => (
    <Styles.H3
      as='h3'
      className='paragon page-menu-entry'
      id={kebabCase(props.children.toLowerCase())}
      data-id={kebabCase(props.children.toLowerCase())}
      {...props}
    />
  ),
  h4: props => (
    <Styles.Header
      as='h4'
      className='double-pica page-menu-entry'
      id={kebabCase(props.children.toLowerCase())}
      data-id={kebabCase(props.children.toLowerCase())}
      {...props}
    />
  ),
  h5: props => (
    <Styles.Header
      as='h5'
      className='great-primer'
      {...props}
    />
  ),
  h6: props => (
    <Styles.Header
      as='h6'
      className='long-primer'
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
  img: props => <Styles.Img {...props} />,
  table: props => <Table.Table {...props} />,
  thead: props => <Table.Thead {...props} />,
  th: props => <Table.Th {...props} />,
  tbody: props => <Table.Tbody {...props} />,
  td: props => <Table.Tdata {...props} className='has-wrappable-content' />,
  tr: props => <Table.Trow {...props} />
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
}
