import styled from 'styled-components'
import { colors, fonts } from 'src/components/theme'
import { Link } from 'gatsby'

export const LeafContainer = styled.li`
  list-style: none;
`

export const LeafToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: transparent;
  color: ${colors.brandDark};
  font-family: ${fonts.body};
  font-size: inherit;
  font-weight: 600;
  line-height: 1.4;
  text-align: left;
  cursor: pointer;

  &:hover {
    color: ${colors.wedgewoodapprox};
  }

  &:focus-visible {
    outline: 2px solid ${colors.wedgewoodapprox};
    outline-offset: -3px;
  }
`

export const LeafList = styled.ul`
  margin: 0;
  padding: 0 0 8px 12px;
  list-style: none;
`

export const LeafListSubItem = styled(Link)`
  display: block;
  padding: 10px 16px;
  color: ${colors.brandDark};
  text-decoration: none;
  overflow-wrap: anywhere;
  font-weight: 400;

  &:hover {
    color: ${colors.wedgewoodapprox};
  }

  &:focus-visible {
    outline: 2px solid ${colors.wedgewoodapprox};
    outline-offset: -3px;
  }
`