import React from 'react';
import Box from '@tds/core-box';
import Card from '@tds/core-card';
import Heading from '@tds/core-heading';
import PriceLockup from '@tds/core-price-lockup';
import Text from '@tds/core-text';
import Paragraph from '@tds/core-paragraph';

const CardDisclaimer = ({ sentences }) => (
  <>
    {
      sentences.map(text => (
        <Paragraph key={text}>
          <Text size="small">{text}</Text>
        </Paragraph>
      ))
    }
  </>
)

const ProductCard = ({ name, brand, price, Image, disclaimer }) => (
  <Card data-testid="product-card" fullHeight variant="defaultWithBorder">
    <Box below={3}>
      {Image}
    </Box>

    <Box below={1}>
      <Heading level="h4" tag="h2">{brand}</Heading>
      <Heading level="h2" tag="h3">{name}</Heading>
    </Box>

    <PriceLockup
      size="medium"
      price={String(price)}
      a11yText={`${price} dollars`}
      signDirection="left"
      bottomText={<CardDisclaimer sentences={disclaimer} />}
    />
  </Card>
);

export default ProductCard;