import React, { Component } from 'react';
import styles from "./styles.module.css";
import loadImg from '../../assets/load.gif'

class InfoMessage extends Component {
  renderInfo() {
    switch(this.props.status){
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
      <div className={styles.load}>
        { this.renderInfo() }
      </div >
    )
  }
}
export default InfoMessage
