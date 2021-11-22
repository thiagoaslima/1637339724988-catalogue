import React from 'react';
import Spinner from '@tds/core-spinner';
import A11yContent from '@tds/core-a11y-content';

import Layout from '../Layout';
import useWatches from '../../../hooks/watches';

const Watches = () => {
    const { isLoading, isIdle, data } = useWatches();
    
    return (
        <Layout pageTitle="Watches">
            <Spinner
                size="large"
                label={<span>Loading <A11yContent>all watches.</A11yContent></span>}
                spinning={isLoading || isIdle}
            >
            { data?.map(watch => {
                return (<p key={watch.name}>{watch.name}</p>)
            })}
            </Spinner>
        </Layout>
    );
}

export default Watches;
