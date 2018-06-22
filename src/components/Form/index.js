import React, { Component } from 'react';
import styles from "./styles.module.css";

class Form extends Component {
  render() {
    const { InputTextStore } = this.props;
    return (
      <form className={styles.main} >
        <input
          id="Search"
          className={styles.input}
          placeholder="Search" />
        <button className={styles.button}>Go</button>
      </form>
    );
  }
}
export default Form;