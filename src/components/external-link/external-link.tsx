import React from 'react';
import { ExternalLinkProps } from './external-link.types';
import { ExternalLinkIcon } from './external-link-style';
import { ReactComponent as ExternalLinkSvg } from '../../assets/svgs/open.in.new.svg';

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <ExternalLinkIcon>
        <ExternalLinkSvg />
      </ExternalLinkIcon>
    </a>
  );
};

export default ExternalLink;