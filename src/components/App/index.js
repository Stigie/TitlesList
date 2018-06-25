import React, { Component } from 'react';
import styles from "./styles.module.css";
import Form from '../Form/index'
import Header from '../Header/index'
import Content from '../Content';
import Footer from '../Footer';


class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <Form />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
