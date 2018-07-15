import React from 'react';
import Load from './style';
import loadImg from '../../assets/load.gif';

class InfoMessage extends React.Component {
  renderInfo() {
    const { status } = this.props;
    switch (status) {
      case 'pending':
        return (<img src={loadImg} />);
      case 'error':
        return ('Ошибка загрузки данных');
      case 'empty':
        return ('По запросу ничего не найдено');
      default: return null;
    }
  }

  render() {
    return (
      <Load>
        {this.renderInfo()}
      </Load>
    );
  }
}
export default InfoMessage;
