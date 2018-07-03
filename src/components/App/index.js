import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import Form from '../Form/index'
import Header from '../Header/index'
import TitleListStore from '../../store/index';
import Content from '../Content';
import Footer from '../Footer';
import { Container } from './style'



class App extends Component {
  render() {
    return (
      <Provider titleListStore={TitleListStore}>
        <Container>
          <Header />
          <Form />
          <Content />
          <Footer />
        </Container>
      </Provider>
    );
  }
}

export default App;
