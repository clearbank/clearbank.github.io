import styled, { css } from 'styled-components'

import { colors, widths, breakpoints } from 'src/components/theme'

export const Container = styled.div`
  color: ${colors.brandLight};
  user-select: none;
  padding: 50px 23px 0px 23px;
  border-left: 3px solid ${colors.boulderapprox};

  @media screen and (min-width: ${breakpoints.large}) {
    position: sticky;
    overflow-y: auto;
    overscroll-behavior: contain;
  }
`

export const Title = styled.h5`
  margin: 0;
  color: ${colors.body};
  font-weight: 600;
  font-size: 32px;
  cursor: default;
  line-height: 38px;
`

export const List = styled.ul`
  list-style: none;
  margin-top: 15px;
`

export const Entry = styled.li`
  // line-height: 38px;
  // font-size: 20px;
`

export const SecondLevelEntry = styled(Entry)``

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${colors.brandDark};

  &:hover {
    color: ${colors.wedgewoodapprox};
  }
`

export const FirstLevelListItem = styled.li`
  font-weight: 500;
  font-size: 20px;
  line-height: 38px;
`

export const SecondLevelListItem = styled.li`
  margin-top: 5px;
  font-weight: 400;
  line-height: 38px;
  margin-left: 30px;

  list-style-image: url(/assets/images/arrow-icon.png);
`

export const ThirdLevelListItem = styled.li`
  font-weight: 400;
  line-height: 38px;
  font-size: 16px;
  margin-left: 60px;

  list-style-image: url(/assets/images/arrow-icon.png);
`;

export const Type = styled.span`
  margin-right: 5px;
  text-transform: uppercase;
`
