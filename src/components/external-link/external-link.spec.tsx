import React from 'react';
import { render } from '@testing-library/react';
import ExternalLink from './external-link';

test('renders external link with icon', () => {
  const { getByText } = render(<ExternalLink href="https://gov.uk">Example text</ExternalLink>);
  const linkElement = getByText(/Example text/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', 'https://gov.uk');
  expect(linkElement).toHaveAttribute('target', '_blank');
});