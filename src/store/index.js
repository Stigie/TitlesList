import { observable, computed, action } from 'mobx';

class InputTextStore {
  @observable inputText;

  constructor() {
    this.inputText = 'username';
  }
  @action('click on submit')
  clickOnsubmit(e) {
    e.preventDefault();
    this.inputText = e.currentTarget.children.username.value;
    if (this.inputText === "") {
      this.inputText = "username"
    }

  }
  @computed get getInputText() {
    return this.inputText;
  }
}

export default new InputTextStore();