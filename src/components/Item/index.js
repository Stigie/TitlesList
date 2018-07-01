import React, { Component } from 'react';
import { ItemView, Dark, Rectangular, Title, Source } from "./style";

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
        <Dark>
          <Rectangular/>
        </Dark>
      </ItemView>
    )
  }
}
export default Item