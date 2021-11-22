import React from 'react';
import Box from '@tds/core-box';
import Heading from '@tds/core-heading';

import BreadcrumbNavigation from '../BreadcrumbNavigation';

const Layout = ({ pageTitle, children }) => {
    return (
        <Box inset={4}>
            <Box below={3}>
                <BreadcrumbNavigation />
                <Heading level="h1">{pageTitle}</Heading>
            </Box>
            {children}
        </Box>
    )
}

export default Layout;
