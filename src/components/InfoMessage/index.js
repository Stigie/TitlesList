import React, { Component } from 'react';
import { Load } from './style';
import loadImg from '../../assets/load.gif'

class InfoMessage extends Component {
  renderInfo() {
    switch (this.props.status) {
      case "pending":
        return (<img src={loadImg} />);
      case "error":
        return ("Ошибка загрузки данных");
      case "empty":
        return ("По запросу ничего не найдено");
    }
  }
  render() {
    return (
      <Load>
        {this.renderInfo()}
      </Load>
    )
  }
}
export default InfoMessage
