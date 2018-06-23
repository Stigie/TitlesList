import React, { Component } from 'react';
import styles from "./styles.module.css";

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <a className={styles.title}>Sticky Footer</a>
      </footer>
    )
  }
}
export default Footer;