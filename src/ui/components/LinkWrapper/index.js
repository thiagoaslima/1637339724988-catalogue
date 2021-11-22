import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import Link from '@tds/core-link';

const LinkWrapper = ({ children, ...rest }) => (
  <Link {...rest} reactRouterLinkComponent={rest.to ? ReactRouterLink : undefined}>
    {children}
  </Link>
);

export default LinkWrapper;
