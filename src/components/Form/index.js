import React, { Component } from 'react';
import { Main, Input, Button } from "./style";
import { observer, inject } from 'mobx-react';

@inject('titleListStore')
@observer
class Form extends Component {
  onSubmitEvent(e) {
    e.preventDefault();
    this.props.titleListStore.clickOnsubmit();
  }
  render() {
    const { titleListStore } = this.props;
    return (
      <Main onSubmit={(e) => { this.onSubmitEvent(e); }}>
        <Input
          onChange={(e) => { titleListStore.onChangeinput(e.currentTarget.value) }}
          id="Search"
          placeholder="Search" />
        <Button disabled={titleListStore.isButtonDisabled}>Go</Button>
      </Main>
    );
  }
}
export default Form;
