import styled from 'styled-components'
import * as ClearbankUI from 'src/components/clearbank-ui'

import { colors, fonts, widths } from 'src/components/theme'

export const SelectDropdown: any = styled(ClearbankUI.Select)`
  display: block;
  margin-bottom: 15px;
  background: ${colors.blackSqueeze};
  border-radius: 4px;
  width: ${widths.dropdown};

  .el-input {
    color: ${colors.businessBlue};
    border-radius: 5px;

    &:hover {
      background: ${colors.businessBlue};
      color: ${colors.brandLight};

      .el-input__icon {
        color: ${colors.brandLight};
      }
    }
    &:focus {
      background: ${colors.blackSqueeze};
      color: ${colors.billionaireBlue};
    }
  }

  .el-input__inner {
    background: inherit;
    color: inherit;
    font-weight: bold;
    font-family: ${fonts.heading};
    box-shadow: none;
  }

  .el-input__icon {
    position: absolute;
    width: 35px;
    top: 0;
    right: 0;
    cursor: pointer;
    color: ${colors.businessBlue};

    &:hover {
      color: ${colors.brandLight};
    }

    &.el-icon-caret-top:before {
      display: block;
      transform: rotate(0);
      content: '\\EA13';
    }

    &.el-icon-caret-top.is-reverse:before {
      transform: rotate(180deg);
    }
  }

  .el-select-dropdown {
    margin: 0;
    background: ${colors.brandLight};
    color: ${colors.brandSecondaryDark};
    border-radius: 4px;
    box-shadow: none;
    overflow: hidden; // needed for border-radius
    box-shadow: 0 3px 10px rgba(105,176,225,.2);

    &__item {
      &.selected {
        color: ${colors.highlightOrange};
        background-color: ${colors.brandLight};
      }
      &.hover {
        color: ${colors.highlightOrange};
        background-color: ${colors.brandLight};
      }
    }
  }

  .el-select-dropdown__list {
    padding: 0;
    font-weight: 400;
    font-style: normal;
    font-family: ${fonts.body};
  }
`

export const SelectOption: any = styled(ClearbankUI.SelectOption)`
  display: flex;
  align-items: center;
  padding: 3px 3px 3px 20px;
  box-sizing: content-box;
  font-size: 14px;

  &:hover {
    background: rgba(255, 154, 0, 0.09);
  }
`
