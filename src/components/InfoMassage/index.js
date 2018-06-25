import React, { Component } from 'react';
import styles from "./styles.module.css";
import loadImg from '../../assets/load.gif'

class InfoMassage extends Component {
  render() {
    return (
      <div className={styles.load}>
        <If true={this.props.state === "pending"}>
          <img src={loadImg} />
        </If>
        <If true={this.props.state === "error"}>
          Ошибка загрузки данных
        </If>
        <If true={this.props.state === "empty"}>
          По запросу ничего не найдено
        </If>
      </div >
    )
  }
}
export default InfoMassage