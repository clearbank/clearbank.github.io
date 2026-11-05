import React, { useEffect, useRef, useState } from 'react'

import * as Styles from './footer.styles'
import * as Types from'./footer.types'

import FooterMenuItem from './footer-menu-item'

const FooterMenu: React.FC<Types.IFooterMenuProps> = ({ menu }) => {
  const menuRef = useRef(null);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    // On initial render
    setTimeout(() => {
      updateWidth();
    }, 0);

    // Future performance improvement, this could get called quickly. Run this through a debounce or throttle function.
    const updateWidth = () => {
      setWidth(menuRef.current.getBoundingClientRect().width);
    };
    
    // Listen for resize event to re-up the state
    window.addEventListener("resize", updateWidth);
    // remove the event listener before the component gets unmounted
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <Styles.ColumnContainer ref={menuRef} key={menu.menuItem.title}>
      <Styles.Title>
        {menu.menuItem.title}
      </Styles.Title>
      <Styles.List>
        {menu.subMenuItems.map(item => (
          <FooterMenuItem item={item} maxWidth={width} />
        ))}
      </Styles.List>
    </Styles.ColumnContainer>
  )
} 

export default FooterMenu