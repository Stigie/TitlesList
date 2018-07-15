import React from 'react';
import PropTypes from 'prop-types';
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

InfoMessage.propTypes = {
  status: PropTypes.string,
};

export default InfoMessage;
