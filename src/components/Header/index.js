import React, { Component } from 'react';
import styles from "./styles.module.css";

class Header extends Component {
  render() {
    const { InputTextStore } = this.props;
    return (
      <header className={styles.header}>
        <a className={styles.title}>Header</a>
      </header>
    )
  }
}
export default Header;
