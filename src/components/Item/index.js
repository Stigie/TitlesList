import React from 'react';
import { ItemView, Title, Source } from './style';

class Item extends React.Component {
  render() {
    const { props } = this;
    return (
      <ItemView>
        <Title>
          {props.title}
        </Title>
        <Source>
          {props.placeOfPublication}
        </Source>
      </ItemView>
    );
  }
}
export default Item;
