import React, { useState } from 'react';
import Toggle from 'react-toggle';
import { navigate } from 'gatsby';
import './region-switch.styles.css'

export default function RegionSwitch({ location }) {
  const [activeOption, setActiveOption] = useState<boolean>(location?.pathname?.includes('/eu'));

  const handleSwitchClick = () => {
    setActiveOption(!activeOption);

    setTimeout(() => navigate(!activeOption ? '/eu' : '/uk'), 300);
  };

  let region;
  if (activeOption){
    region = 'Europe API';
  } else{
    region = 'UK API'
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
