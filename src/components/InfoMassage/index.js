import React, { Component } from 'react';
import styles from "./styles.module.css";
import loadImg from '../../assets/load.gif'

class InfoMassage extends Component {
  renderLoad = () => {
    if (this.props.status === "pending") {
      return (<img src={loadImg} />);
    }
  }
  renderError = () => {
    if (this.props.status === "error") {
      return ("Ошибка загрузки данных");
    }
  }
  renderEmpty = () => {
    if (this.props.status === "empty") {
      return ("По запросу ничего не найдено");
    }
  }
  render() {
    return (
      <div className={styles.load}>
        { this.renderLoad() }
        { this.renderError() }
        { this.renderEmpty() }
      </div >
    )
  }
}
export default InfoMassage