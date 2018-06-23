import { observable, computed, action, runInAction } from 'mobx';

class TitelListStore {
  @observable listOfTitles;
  @observable state;
  @observable inputText;

  constructor() {
    this.state = "done"
    this.listOfTitles = [];
    this.inputText = "";
  }
  @action('load DATA')
  async loadData(searchText) {
    this.state = "pending";
    let url = "https://chroniclingamerica.loc.gov/search/titles/results/?terms=" + searchText + "&format=json&page=1";
    return fetch(url);
  }
  @action('click on submit, filter data')
  async clickOnsubmit(e) {
    e.preventDefault();
    let searchText = e.currentTarget.children.Search.value.toLowerCase();
    this.state = "pending";
    this.listOfTitles = [];
    try {
      this.listOfTitles = await this.loadData(searchText)
        .then(
          (response) => { return response.json() },
          (error) => { console.log(error) })
        .then((item) => { return item.items });
      runInAction(() => {
        if (this.listOfTitles.length === 0) {
          this.state = "empty";
        } else {
          this.state = "done";
        }
      })
    }
    catch (error) {
      runInAction(() => {
        this.state = "error"
      })
    }
  }
  @action('onChange input')
  onChangeinput(e) {
    this.inputText = e.currentTarget.value;
  }
  @computed get getInputText() {
    return this.inputText;
  }
  @computed get buttonState() {
    if (this.inputText === "")
      return true;
    else return false;
  }
}

export default new TitelListStore();