import styled from 'styled-components'
import { colors } from 'src/components/theme'

export const Container = styled.article`
  position: relative;
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden; // needed for border-radius on parent
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 5px 15px 15px;
  background-color: ${({ color }) => color};
  font-size: 16px;
  color: ${colors.brandLight};
`

export const RequestDetails = styled.h4`
  margin: 0;
  padding-right: 5px;
  font-size: 16px;
  line-height: 20px;
  color: inherit;
  text-transform: capitalize;
  font-family: 'Roboto Mono', monospace;
`
export const CopyButton = styled.button.attrs({
  type: 'button'
})`
  padding: 0;
  border: none;
  font-family: inherit;
  line-height: 1.15;
  font-size: 13px;
  color: inherit;
  background: none;
  cursor: pointer;
`

export const Body = styled.div`
  padding: 20px 2px 20px 15px;
  font-family: 'RobotoMono-Regular', 'Roboto Mono', sans-serif;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  line-height: normal;
  background: #1e1e1e;
  overflow: visible;
  overflow-x: scroll;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
`
