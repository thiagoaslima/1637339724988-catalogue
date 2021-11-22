import React from 'react';
import Box from '@tds/core-box';
import Image from '@tds/core-image';
import Spinner from '@tds/core-spinner';
import FlexGrid from '@tds/core-flex-grid';
import A11yContent from '@tds/core-a11y-content';

import Layout from '../Layout';
import useIphones from '../../../hooks/iphones';
import ProductCard from '../ProductCard';
import { API_URL } from '../../../lib/configuration';

const imageProps = {
    src: `${API_URL}/images/iphone.jpg`,
    width: 160,
    height: 202
}

const IphoneImage = ({ alt }) => (
    <Image {...imageProps} alt={alt} />
)

const Iphones = () => {
    const { isLoading, isIdle, isSuccess, data } = useIphones();

    return (
        <Layout pageTitle="Iphones">
            <Spinner
                size="large"
                label={<span>Loading <A11yContent>all watches.</A11yContent></span>}
                spinning={isLoading || isIdle}
            >
                {isSuccess && (
                    <Box between={3}>
                        <FlexGrid limitWidth={false}>
                            <FlexGrid.Row verticalAlign="top" distribute="around">
                                {
                                    data?.map(watch => (
                                        <FlexGrid.Col key={watch.name} xs={12} sm={4} lg={3}>
                                            <ProductCard
                                                {...watch}
                                                Image={<IphoneImage alt={`${watch.brand} ${watch.name} iphone picture`} />}
                                                disclaimer={[
                                                    'TELUS Easy Payment and Bring-It-Back applied.', 
                                                    'Read legal footnote', 
                                                    'Taxes due upfront.'
                                                ]}
                                            />
                                        </FlexGrid.Col>
                                    ))
                                }
                            </FlexGrid.Row>
                        </FlexGrid>
                    </Box>
                )}
            </Spinner>
        </Layout>
    );
}

export default Iphones;
