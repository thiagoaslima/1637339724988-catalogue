import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import ButtonLink from '@tds/core-button-link'

const ButtonLinkWrapper = ({ children, ...rest }) => (
  <ButtonLink {...rest} reactRouterLinkComponent={rest.to ? ReactRouterLink : undefined}>
    {children}
  </ButtonLink>
);

export default ButtonLinkWrapper;
