import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import {
  Main,
  Input,
  Button,
} from './style';

@inject('titleListStore')
@observer
class Form extends React.Component {
  onSubmitEvent(e) {
    e.preventDefault();
    this.props.titleListStore.clickOnsubmit();
  }

  render() {
    const { titleListStore } = this.props;
    return (
      <Main onSubmit={(e) => { this.onSubmitEvent(e); }}>
        <Input
          onChange={(e) => { titleListStore.onChangeinput(e.currentTarget.value); }}
          id="Search"
          placeholder="Search" />
        <Button disabled={titleListStore.isButtonDisabled}>Go</Button>
      </Main>
    );
  }
}

Form.propTypes = {
  titleListStore: PropTypes.object,
};

export default Form;
