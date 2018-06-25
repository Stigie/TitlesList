import React, { Component } from 'react';
import styles from "./styles.module.css";

class Item extends Component {
    render() {
        return (
            <div className={styles.item}>
                <div className={styles.title}>
                    Designation
                </div>
                <div className={styles.sourse}>
                    Find a co-founder for your sturt-up buisness
                </div>
            </div>
        )
    }
}
export default Item
