import styled, { css } from 'styled-components'
import { Text } from 'rebass'
import { colors, fonts } from 'src/components/theme'

export const Container: any = styled.div`
  .el-collapse {
    margin-bottom: 0;
  }

  .el-icon-arrow-right {
    transition: transform 0.3s;
  }

  .el-collapse-item__header,
  .el-collapse-item__wrap,
  .el-collapse {
    border: none;
  }

  .el-collapse-item {
    > .el-collapse-item__header {
      display: flex;
      flex-direction: row-reverse;
      height: auto;
      margin-top: 10px;
      padding: 0 2px;
      line-height: 1;
      font-family: ${fonts.body};
      font-weight: 600;
      font-size: 14px;
      color: ${colors.billionaireBlue};

      > .el-collapse-item__header__arrow {
        margin-left: 15px;
        margin-right: auto;
        font-family: cb-icon !important;

        &:before {
          content: '\\EA13'; // double backslash needed for escaping
          display: block;
          transform: rotate(0);
          transition: all 0.25s;
        }
      }
    }

    .el-collapse-item__wrap {
      margin-top: 15px;
    }

    // expanded styles
    &.is-active > .el-collapse-item__header {
      > .el-collapse-item__header__arrow:before {
        transform: rotate(180deg);
      }
    }

    &.is-active > .el-collapse-item__header {
      // faux border
      &:before {
        content: '';
        position: absolute;
        left: -25px;
        right: 0;
        height: 0;
        top: 29px;
      }
    }
  }

  .el-collapse-item {
    &__content {
      padding: 0;
    }

    &__header {
      background-color: transparent;
    }
  }
`

export const DataList: any = styled.ul`
  position: relative;
  list-style: none;
  margin: 0 !important;
  padding: 0 !important;

  border: ${props => (props.border ? '1px solid #e6e6e6' : 'none')};
  border-radius: 5px;

  li:first-of-type {
    margin-top: 0;
    border-top: 0;
  }

  li:last-of-type {
    margin-bottom: 0;
  }
`

export const BlockTitle = styled(Text)`
  margin-bottom: 20px !important;
  color: ${colors.businessBlue};
  font-weight: 600;
`

export const LighterText = styled.span`
  font-weight: 400;
`

export const DataListItem: any = styled.li`
  padding: 15px 0 15px 20px;

  ${({ nested }: any): any =>
    !nested &&
    css`
      border-top: dashed 1px ${colors.brandGray};
    `}
`

export const Type: any = styled.span`
  font-size: 13px;
  color: ${colors.brandGreenDark};
  font-family: ${fonts.monospace};
`

export const Header: any = styled.span`
  font-size: 15px;
  font-weight: bold;
  font-family: ${fonts.monospace};
  text-transform: capitalize;
  color: ${colors.businessBlue};
`

export const SubHeader: any = styled.span`
  font-size: 24px;
  font-family: ${fonts.body};
  color: ${colors.brandSecondaryDarker};
`

export const In: any = styled.span`
  font-size: 13px;
  color: ${colors.brandGrayDarker};
  font-family: ${fonts.monospace};
  text-transform: capitalize;
`

export const Required: any = styled.span`
  font-size: 13px;
  text-transform: uppercase;
  color: ${colors.richRed};
  font-family: ${fonts.monospace};
`

export const Description: any = styled.p`
  margin-bottom: 0;
  font-size: 16px;
  word-wrap: break-word;
`

export const AdditionalAttributesList: any = styled.dl`
  display: flex;
  line-height: 1.5;
  font-size: 13px;
  font-family: ${fonts.monospace};
  color: ${colors.body};
`

export const AdditionalAttributeKey: any = styled.dt`
  flex: 0 1 auto;
  white-space: nowrap;

  &::after {
    content: ':';
    padding-right: 5px;
  }
`

export const AdditionalAttributeValue: any = styled.dd`
  flex: 1 0 0;

  ${({ isComplexType }) =>
    isComplexType &&
    css`
      &::before {
        content: '[';
      }
      &::after {
        content: ']';
      }
    `}
`
