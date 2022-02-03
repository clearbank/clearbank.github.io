import styled, { css } from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

import { colors, fonts } from 'src/components/theme'

const arrowTranslate = {
  next: '5px',
  previous: '-5px'
}

export const Label = styled.span`
  font-size: 14px;
  cursor: default;
  color: ${colors.lynch};
`

export const Icon: any = styled.i``

export const Text = styled.span`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
`

export const IconWrapper = styled.span`
  width: 22px;
  height: 22px;
  font-size: 25px;
  transform: translateX(0);
  will-change: transform;
  transition: transform 0.25s ease-out;
`

export const Link: any = styled(GatsbyLink)`
  display: flex;
  align-items: flex-end;
  color: ${colors.billionaireBlue};
  font-weight: bold;
  font-family: ${fonts.heading};

  &:hover {
    color: ${colors.brandSecondaryDarkest};
  }

  ${({ direction }: any) =>
    direction === 'next' &&
    css`
      flex-direction: row-reverse;
    `}
`

export const Container: any = styled.div`
  ${({ direction }: any) =>
    direction === 'next' &&
    css`
      flex-grow: 1;
      text-align: right;
    `}

  &:hover {
    ${IconWrapper} {
      ${({ direction }: any) => css`
        transform: translateX(${arrowTranslate[direction]});
      `}
    }
  }
`
