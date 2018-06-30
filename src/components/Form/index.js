import React, { Component } from 'react';
import styles from "./styles.module.css";
import { observer, inject } from 'mobx-react';

@inject('titleListStore')
@observer
class Form extends Component {
  onSubmitEvent(e){
    e.preventDefault();
    this.props.titleListStore.clickOnsubmit();
  }
  render() {
    const { titleListStore } = this.props;
    return (
      <form className={styles.main} onSubmit={(e) => { this.onSubmitEvent(e); }}>
        <input
          onChange={(e) => { titleListStore.onChangeinput(e.currentTarget.value) }}
          id="Search"
          className={styles.input}
          placeholder="Search" />
        <button className={styles.button} disabled={titleListStore.isButtonDisabled}>Go</button>
      </form>
    );
  }
}
export default Form;
