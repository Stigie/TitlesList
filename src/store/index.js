import { observable, computed, action, runInAction } from 'mobx';

class Title {
  id;
  @observable title;
  @observable placeOfPublication;
  constructor(id, title, placeOfPublication) {
    this.id = id;
    this.title = title;
    this.placeOfPublication = placeOfPublication;
  }
}

class TitleListStore {
  @observable listOfTitles = [];
  @observable status = "done";
  @observable inputText = "";

  @action('click on submit, filter data')
  async clickOnsubmit() {
    this.status = "pending";
    let url = `http://localhost:3000/titles?q=${this.inputText}`;
    this.listOfTitles = [];
    try {
      let response = await fetch(url);
      let jsonResponse = await response.json();
      this.listOfTitles = jsonResponse.map((item) => { return new Title(item.id, item.title, item.placeOfPublication) });
      console.log(this.listOfTitles);
      runInAction(() => {
        if (this.listOfTitles.length === 0) {
          this.status = "empty";
        } else {
          this.status = "done";
        }
      })
    }
    catch (error) {
      runInAction(() => {
        this.status = "error";
        console.log(error);
      })
    }
  }
  @action('onChange input')
  onChangeinput(mess) {
    this.inputText = mess;
  }

  @computed get isButtonDisabled() {
    return !Boolean(this.inputText);
  }
}

export default new TitleListStore();