import React, { Component } from 'react';
import styles from "./styles.module.css";
import loadImg from '../../assets/load.gif'

class Load extends Component {
    render() {
        return (
            < div className={styles.load} >
                <img src={loadImg}/>
            </div >
        )
    }
}
export default Load