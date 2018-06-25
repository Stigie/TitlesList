import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import styles from "./styles.module.css";
import Form from '../Form/index'
import Header from '../Header/index'
import TitelListStore from '../../store/index';
import Content from '../Content';
import Footer from '../Footer';


class App extends Component {
  render() {
    return (
      <Provider TitelListStore={TitelListStore}>
        <div className={styles.container}>
          <Header />
          <Form />
          <Content />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
