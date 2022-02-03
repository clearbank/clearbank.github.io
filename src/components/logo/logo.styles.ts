import styled, { css } from 'styled-components'
import { colors } from 'src/components/theme'

export const Logo: any = styled.div`
  ${({ width }: any): any => css`
    width: ${width || '100%'};
  `}

  ${({ inverted }: any): any => css`
    path:not(#logo-dot):not(#logo-developer-text) {
      fill: ${inverted ? colors.brandSecondaryDarkest : colors.brandLight};
    }
  `}
`

export const TextPath: any = styled.path``
