import React from 'react';
import { ExternalLinkProps } from './external-link.types';
import { ExternalLinkIcon } from './external-link-style';

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <ExternalLinkIcon />
    </a>
  );
};

export default ExternalLink;