import styled from 'styled-components'

import { colors, fonts } from 'src/components/theme'

const typeMap = {
  get: colors.dodgerBlue,
  post: colors.emerald,
  patch: colors.indigo,
  delete: colors.red
}

export const Container = styled.code`
  display: inline-flex;
  margin: 15px 0 10px 0;
  padding: 12px 10px;
  font-size: 14px;
  font-family: ${fonts.monospace};
  letter-spacing: 0;
  color: ${colors.brandLight};
  overflow-x: scroll;
  width: auto;
  max-width: 100%;
  border-radius: 0;
  background: ${({ type }) =>
    type in typeMap ? typeMap[type] : colors.brandSecondaryDark};

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

`
