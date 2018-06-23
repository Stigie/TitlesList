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
      <div className={styles.container}>
        <Header />
        <Provider TitelListStore={TitelListStore}>
          <Form />
        </Provider>
        <Provider TitelListStore={TitelListStore}>
          <Content />
        </Provider>
        <Footer />
      </div>
    );
  }
}

export default App;
