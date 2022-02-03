import styled, { css } from 'styled-components'
import { Text } from 'rebass'

import { colors } from 'src/components/theme'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
`

export const Title = styled(Text)``

export const ParentListStyle = css`
  border-bottom: dashed 1px ${colors.brandGray};
`
export {
  FlexContainer,
  DataListWrapper,
  CodeblockWrapper
} from '../../endpoint-block.styles'
