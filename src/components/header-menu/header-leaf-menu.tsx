import React, { useRef, useState, useEffect } from 'react';

import * as Styles from './header-leaf-menu.styles'
import * as Types from'./header-menu.types'

const HeaderLeafMenu: React.FC<Types.IHeaderLeafMenuProps> = ({ id, title, items, onHover, isLast }) => {
    const itemRef = useRef(null);
    const menuRef = useRef(null);

    const [left, setLeft] = useState(false);
  
    useEffect(() => {
      // On initial render
      setTimeout(() => {
        updateLeft();
      }, 0);
  
      // Future performance improvement, this could get called quickly. Run this through a debounce or throttle function.
      const updateLeft = () => {
        const item = itemRef.current.getBoundingClientRect();
        const menu = menuRef.current.getBoundingClientRect();

        const rightEdge = item.x + item.width + menu.width;

        setLeft(rightEdge > (window.innerWidth || document.documentElement.clientWidth));
      };
      
      // Listen for resize event to re-up the state
      window.addEventListener("resize", updateLeft);
      // remove the event listener before the component gets unmounted
      return () => window.removeEventListener("resize", updateLeft);
    }, []);
    
  const handleMouseEnter = () => {
    if (isLast) {
      (left) ? onHover('leaf-bottom-left') : onHover('leaf-bottom-right');
    }
  };

  const handleMouseLeave = () => {
    if (isLast) {
      onHover('normal');
    }
  };

  return (
    <Styles.LeafContainer
      key={id}
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      ref={itemRef}>
      <Styles.LeafListItem>
        {title}
      </Styles.LeafListItem>
      <Styles.LeafList left={left} ref={menuRef}>
        {items?.map(item => (
          <li key={item.fields.id}>
            <Styles.LeafListSubItem to={item.fields.slug}>
              {item.fields.title}
            </Styles.LeafListSubItem>
          </li>
        ))}
      </Styles.LeafList>
    </Styles.LeafContainer>
  )
}

export default HeaderLeafMenu