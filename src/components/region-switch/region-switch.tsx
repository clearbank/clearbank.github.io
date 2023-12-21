import React, { useState } from 'react';
import Toggle from 'react-toggle';
import './region-switch.styles.css'

export default function RegionSwitch() {
  const [activeOption, setActiveOption] = useState<boolean>(document.location.href.includes('/eu'));

  const handleSwitchClick = () => {
    setActiveOption(!activeOption);

    setTimeout(() => document.location.href = !activeOption ? '/eu' : '/uk', 300);
  };

  return (
    <label>
      <Toggle
        icons={false}
        defaultChecked={activeOption}
        onChange={handleSwitchClick}
      />
    </label>
  );
}
