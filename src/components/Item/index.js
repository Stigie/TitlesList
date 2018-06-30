import React, { Component } from 'react';
import { ItemView, Dark, TopTriangle, BottomTriangle, Rectangular, Title, Source } from "./style";

class Item extends Component {
  render() {
    return (
      <ItemView>
        <Title>
          {this.props.title}
        </Title>
        <Source>
          {this.props.placeOfPublication}
        </Source>
      </ItemView>
    )
  }
}
export default Item