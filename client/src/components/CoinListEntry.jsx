import React from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import { moneyFormat, capitalize, colorChange } from '../lib/helper.js';

//TODO:
//  Styling: (background color, special font, etc)

const CoinListEntry = (props) => {
  return (
    <Grid.Row>
      <Grid.Column width={1}>
        {props.asset.rank}
      </Grid.Column>
      <Grid.Column width={5}>
        {capitalize(props.asset.id) + ' (' + props.asset.symbol + ') '}
      </Grid.Column>
      <Grid.Column width={2}>
        ${Number(props.asset.priceUsd).toFixed(2)}
      </Grid.Column>
      <Grid.Column width={2}>
        ${moneyFormat(props.asset.marketCapUsd)}
      </Grid.Column>
      <Grid.Column width={2}>
        ${moneyFormat(props.asset.supply)}
        </Grid.Column>
      <Grid.Column width={2}>
        ${moneyFormat(props.asset.volumeUsd24Hr)}
      </Grid.Column>
      <Grid.Column width={2}>
        {colorChange(Number(props.asset.changePercent24Hr).toFixed(2))}
      </Grid.Column>
    </Grid.Row>
  );
}

export default CoinListEntry;