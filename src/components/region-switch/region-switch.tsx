import React, { useState } from 'react';
import Toggle from 'react-toggle';
import './region-switch.styles.css'

export default function RegionSwitch() {
  const [activeOption, setActiveOption] = useState<boolean>(document.location.href.includes('/eu'));

  const handleSwitchClick = () => {
    setActiveOption(!activeOption);

    setTimeout(() => document.location.href = !activeOption ? '/eu' : '/uk', 300);
  };

  let region;
  if (activeOption){
    region = 'Europe API docs';
  } else{
    region = 'UK API docs'
  }

  return (
    <label>
      <span className="react-toggle-label"><strong>{region}</strong></span>
      <Toggle
        icons={false}
        defaultChecked={activeOption}
        onChange={handleSwitchClick}
      />
      <br/>UK &nbsp;&nbsp;&nbsp;&nbsp; EU
    </label>
  );
}
