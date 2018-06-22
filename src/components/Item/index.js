import React, { Component } from 'react';
import styles from "./styles.module.css";

class Item extends Component {
    render() {
        return (
            < div className = { styles.item } >
                <div className={styles.title}>
                    Designation
          </div>
                <div className={styles.sourse}>
                    Find a co-founder for your sturt-up buisness
          </div>
          {/* <div className={styles.dark}>
            <div className={styles.toptriangle}/>
            <div className={styles.rectangular}/>
            <div className={styles.bottomtriangle}/>
          </div> */}
        </div >
        )
    }
}
export default Item