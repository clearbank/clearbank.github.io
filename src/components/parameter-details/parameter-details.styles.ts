import styled from 'styled-components'

import {
  colors,
  fonts,
  breakpoints,
  httpMethodColors
} from 'src/components/theme'

export const Container = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 25px;
  border: 1px solid ${colors.brandGray};
  border-radius: 5px;
`

export const Head = styled.header`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;

  @media screen and (min-width: ${breakpoints.xxxLarge}) {
    flex-wrap: nowrap;
  }
`

export const Content = styled.div`
  font-family: ${fonts.body};
  font-weight: 400;
  font-size: 16px;
  color: ${colors.baliHai};
  line-height: 1.75;

  @media screen and (min-width: ${breakpoints.small}) {
    font-size: 18px;
  }

  code {
    border-radius: 10px;
    padding: 5px 10px;
    white-space: nowrap;
    font-family: ${fonts.monospace};
    font-weight: 400;
    font-size: 15px;
    color: ${colors.body};
    background-color: ${colors.concrete};
  }
`

export const Aside = styled.aside`
  margin-top: 15px;

  pre {
    padding: 16px;
    font-size: 14px;
    overflow: auto;
  }
`

export const Title = styled.h4`
  margin-right: 5px;
  margin-bottom: 15px;
  padding: 5px 10px;
  font-family: ${fonts.monospace};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.75;
  color: ${colors.body};
  background-color: ${colors.concrete};
  border-radius: 10px;
  white-space: nowrap;
`

export const SettingsList = styled.ul`
  display: flex;
  margin-right: auto;
`

export const SettingValue = styled.li`
  display: block;
  margin-right: 10px;

  &:not(:last-of-type):after {
    content: ',';
  }
`

export const SettingValueEntry = styled.span`
  line-height: 20px;
  font-size: 13px;
  font-family: ${fonts.monospace};
`

export const Type = styled(SettingValueEntry)`
  color: ${colors.hippieGreen};
  text-transform: lowercase;
`

export const Location = styled(SettingValueEntry)`
  color: ${colors.dustyGray};
  text-transform: capitalize;
`

export const Required = styled(SettingValueEntry)`
  color: ${colors.red};
  text-transform: uppercase;
`

export const MethodsList = styled.ul`
  display: flex;
  margin-bottom: 15px;
  list-style: none;
`

export const MethodsEntry = styled.li`
  display: block;

  & + & {
    margin-left: 10px;
  }
`

export const Method = styled.div`
  padding: 5px 10px;
  text-transform: capitalize;
  font-size: 12px;
  font-family: ${fonts.monospace};
  text-transform: uppercase;
  color: ${colors.brandLight};
  background: ${({ type }) =>
    type in httpMethodColors
      ? httpMethodColors[type]
      : httpMethodColors.default};
`

export const Subtitle = styled.h5`
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 16px;
  color: ${colors.body};
`
