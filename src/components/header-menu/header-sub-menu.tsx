import React, { useState, useRef, useEffect } from 'react'

import * as Styles from './header-menu.styles'
import * as Types from'./header-menu.types'
import HeaderMenuListItem from './header-menu-list-item'

const HeaderSubMenu: React.FC<Types.IHeaderSubMenuProps> = ({ item, isActive }) => {
    const menuRef = useRef(null);

    const [borderState, setBorderState] = useState("normal");
    const [left, setLeft] = useState(0);
    const [width, setWidth] = useState(0);
  
    useEffect(() => {
      // On initial render
      setTimeout(() => {
        updatePosition();
      }, 0);
  
      const updatePosition = () => {
        let { left, width } = menuRef.current.getBoundingClientRect();
        setLeft(left);
        setWidth(width);
      };
      
      // Listen for resize event to re-up the state
      window.addEventListener("resize", updatePosition);
      // remove the event listener before the component gets unmounted
      return () => window.removeEventListener("resize", updatePosition);
    }, []);
    
    return (
      <Styles.Container ref={menuRef}>
        <Styles.TitleContainer>
          <Styles.Title isActive={isActive}>
            {item.menuItem.title}
          </Styles.Title>
          {
            isActive && (
              <Styles.Underline />
            )
          }
        </Styles.TitleContainer>
        <Styles.List borderState={borderState}>
          {item.subMenuItems?.map((element, index, array) => (
            <HeaderMenuListItem item={element} onHover={(state: string) => setBorderState(state)} isLast={index == array.length - 1}/>
          ))}
        </Styles.List>
      </Styles.Container>
    )
  }

  export default HeaderSubMenu