import React from 'react';
import Box from '@tds/core-box';
import Heading from '@tds/core-heading';

const Layout = ({ pageTitle, children }) => {
    return (
        <Box inset={4}>
            <Box below={3}>
                <Heading level="h1">{pageTitle}</Heading>
            </Box>
            {children}
        </Box>
    )
}

export default Layout;
