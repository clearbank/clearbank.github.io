import React from 'react';
import { ExternalLinkProps } from './external-link.types';

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;