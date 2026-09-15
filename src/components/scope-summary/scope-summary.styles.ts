import styled from 'styled-components'

import { colors, fonts, httpMethodColors } from 'src/components/theme'

export const Container = styled.div`
  margin-bottom: 40px;
`

export const ScopeCard = styled.div`
  padding: 20px;
  border: 1px solid ${colors.brandGray};
  border-radius: 4px;

  & + & {
    margin-top: 16px;
  }
`

export const ScopeId = styled.code`
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  color: ${colors.brandGrayDarkest};
`

export const Meta = styled.p`
  margin: 8px 0 12px;
  font-family: ${fonts.body};
  font-size: 14px;
  color: ${colors.brandGrayDarker};
`

export const OperationList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

export const OperationItem = styled.li`
  margin: 0;
  font-size: 15px;
  line-height: 28px;

  & + & {
    margin-top: 6px;
  }
`

export const Method = styled.span<{ type: string }>`
  display: inline-block;
  min-width: 56px;
  margin-right: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ type }) =>
    httpMethodColors[(type || '').toLowerCase()] || httpMethodColors.default};
`

export const Path = styled.span`
  font-family: ${fonts.monospace};
  color: ${colors.brandGrayDarkest};
`

export const Empty = styled.p`
  font-family: ${fonts.body};
  color: ${colors.brandGrayDarker};
`
