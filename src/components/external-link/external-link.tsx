import React from 'react';
import { ExternalLinkProps } from './external-link.types';
import ExternalLinkSvg from '../../assets/svgs/open.in.new.svg';

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children }) => {
  return (
    <span>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
      <span> (external)</span>
    </span>
  );
};

export default ExternalLink;