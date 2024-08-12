import styled from 'styled-components'

import { colors, fonts } from 'src/components/theme'

const colours = {
  blue: {
    background: colors.bonusBlue,
    border: colors.businessBlue
  },
  green: {
    background: colors.brandSecondary,
    border: colors.brandSecondaryDarker
  }
}

export const Container = styled.aside`
  padding: 20px;
  color: ${colors.businessBlue};
  background: ${({ color }) =>
    color in colours ? colours[color].background : 'none'};
  border-radius: 4px;
  border-left: 6px solid
    ${({ color }) => (color in colours ? colours[color].border : 'none')};

  p,
  div {
    font-size: 16px;
    color: ${colors.businessBlue};
    font-family: ${fonts.body};
  }
`
