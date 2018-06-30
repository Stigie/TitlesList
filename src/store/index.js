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
    let url = `https://chroniclingamerica.loc.gov/search/titles/results/?terms=${this.inputText}&format=json&page=1`;
    this.listOfTitles = [];
    try {
      let response = await fetch(url);
      let jsonResponse = await response.json();
      this.listOfTitles = jsonResponse.items.map((item) => { return new Title(item.id, item.title, item.place_of_publication) });
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