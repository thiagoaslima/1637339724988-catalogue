import React from 'react';
import UnorderedList from '@tds/core-unordered-list';

import Layout from '../Layout';
import LinkWrapper from '../LinkWrapper';

const Home = () => (
    <Layout pageTitle="Device Catalogue">
        <nav>
            <UnorderedList>
                <UnorderedList.Item>
                    <LinkWrapper to="/iphones">Iphones</LinkWrapper>
                </UnorderedList.Item>
                <UnorderedList.Item>
                    <LinkWrapper to="/watches">Watches</LinkWrapper>
                </UnorderedList.Item>
            </UnorderedList>
        </nav>
    </Layout>
);

export default Home;
