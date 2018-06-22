import React, { Component } from 'react';
import Item from "../Item"
import styles from "./styles.module.css";

class Content extends Component {
  render() {
    return (
      <content className={styles.content}>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </content>
    )
  }
}
export default Content;