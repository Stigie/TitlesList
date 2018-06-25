import React, { Component } from 'react';
import styles from "./styles.module.css";
import { observer, inject } from 'mobx-react';

@inject('TitelListStore')
@observer
class Form extends Component {
  render() {
    const { TitelListStore } = this.props;
    return (
      <form className={styles.main} onSubmit={(e) => { TitelListStore.clickOnsubmit(e) }}>
        <input
          onChange={(e) => { TitelListStore.onChangeinput(e) }}
          id="Search"
          className={styles.input}
          placeholder="Search" />
        <button className={styles.button} disabled={TitelListStore.buttonState}>Go</button>
      </form>
    );
  }
}
export default Form;