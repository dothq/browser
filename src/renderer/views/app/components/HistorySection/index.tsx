import * as React from 'react';

import HistoryItem from '../HistoryItem';
import { HistorySection } from '../../models';

import { Item, Label } from './style';

export default ({ data }: { data: HistorySection }) => {
  return (
    <Item style={{ boxShadow: 'rgba(0, 0, 0, 0.21) 5px 5px 33px 10px' }}>
      <Label>{data.label}</Label>
      {data.items.map(item => (
        <HistoryItem key={item._id} data={item} />
      ))}
    </Item>
  );
};
