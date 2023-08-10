import React, { useState } from "react";
import Toggle from 'react-toggle';

interface RegionSwitchProps {
  onChange?: (isActive: boolean) => void
}

export default function RegionSwitch({ onChange }: RegionSwitchProps) {
  const [activeOption, setActiveOption] = useState<boolean>(false);

  const handleSwitchClick = () => {
    onChange?.(!activeOption);
    setActiveOption(!activeOption);
  };

  return (
    <label>
      <Toggle
        icons={false}
        defaultChecked={document.location.href.startsWith('/eu')}
        onChange={handleSwitchClick}
      />
    </label>
  );
}
