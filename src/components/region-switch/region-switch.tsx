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

  return (
    <label className='region-switch'>
      <span className='region-switch-row'>
        <span className="react-toggle-label"><strong>API Region</strong></span>
        <span className='region-switch-toggle-wrapper'>
          <Toggle
            icons={false}
            defaultChecked={activeOption}
            onChange={handleSwitchClick}
          />
          <span className='region-switch-caption'>UK &nbsp;&nbsp;&nbsp;&nbsp; EU</span>
        </span>
      </span>
    </label>
  );
}