import styled from 'styled-components'

import { colors, fonts } from 'src/components/theme'

export const Summary = styled.ul`
  padding: 20px 20px;
  border: 1px solid ${colors.brandGray};
  list-style: none;
  margin-bottom: 20px;
  border-radius: 4px;
`

export const ListEntry = styled.li`
  margin: 0px;

  & + & {
    margin-top: 10px;
  }
`

export const Title = styled.h4`
  margin-bottom: 20px;
  font-size: 20px;
  font-family: ${fonts.body};
  font-weight: 600;
  color: ${colors.downriver};
  line-height: 40px;
`

export const WebhookLink = styled.a`
  color: ${colors.highlightAqua};
  font-size: 16px;
  line-height: 28px;

  &:hover {
    color: ${colors.hoverOrange};
  }
`
