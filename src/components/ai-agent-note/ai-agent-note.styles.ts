import styled from 'styled-components'

// Screen-reader / machine-readable only. Kept in the DOM and the accessibility
// tree (so AI agents and assistive tech read it) but visually hidden so it does
// not clutter the rendered page for human readers. Deliberately NOT display:none
// or aria-hidden, both of which would remove it from extracted text.
export const Note = styled.aside`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`
