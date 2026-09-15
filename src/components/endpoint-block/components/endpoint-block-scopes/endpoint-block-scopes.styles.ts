import styled from 'styled-components'

import { colors, fonts, httpMethodColors } from 'src/components/theme'

export const Title = styled.h4`
  margin-bottom: 8px;
  font-size: 20px;
  font-family: ${fonts.body};
  font-weight: 600;
  color: ${colors.downriver};
  line-height: 40px;
`

export const GatewayBadge = styled.span`
  display: inline-block;
  margin-bottom: 16px;
  padding: 4px 10px;
  border-radius: 4px;
  background: ${colors.blackSqueeze};
  color: ${colors.brandSecondaryDarker};
  font-family: ${fonts.body};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`

export const Summary = styled.ul`
  padding: 20px 20px;
  border: 1px solid ${colors.brandGray};
  list-style: none;
  margin-bottom: 20px;
  border-radius: 4px;
`

export const ScopeEntry = styled.li`
  margin: 0px;

  & + & {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid ${colors.brandGray};
  }
`

export const ScopeId = styled.code`
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  color: ${colors.brandGrayDarkest};
`

export const OperationsLabel = styled.p`
  margin: 12px 0 8px;
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
