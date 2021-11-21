import React from 'react';
import Box from '@tds/core-box'
import Heading from '@tds/core-heading';
import Paragraph from '@tds/core-paragraph';

import ButtonLinkWrapper from '../ButtonLinkWrapper';

const NotFound = () => (
    <Box tag="main" inset={4} between={3}>
        <Heading level="h1">Looks like something went wrong.</Heading>
        <Paragraph>A 404 error isn’t what you want, let’s get you back on track.</Paragraph>
        
        <Box vertical={2}>
            <ButtonLinkWrapper variant="standard" rank="main" to="/">Return to homepage</ButtonLinkWrapper>
        </Box>
    </Box>
);

export default NotFound;
