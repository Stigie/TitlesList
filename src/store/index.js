import { observable, computed, action, runInAction } from 'mobx';

class TitelListStore {
  @observable listOfTitles;
  @observable status;
  @observable inputText;

  constructor() {
    this.status = "done"
    this.listOfTitles = [];
    this.inputText = "";
  }
  @action('load DATA')
  async loadData(searchText) {
    this.status = "pending";
    let url = `https://chroniclingamerica.loc.gov/search/titles/results/?terms=${searchText}&format=json&page=1`;
    return fetch(url)
  }
  @action('click on submit, filter data')
  async clickOnsubmit(e) {
    e.preventDefault();
    let searchText = this.inputText;
    this.status = "pending";
    this.listOfTitles = [];
    try {
      let response = await this.loadData(searchText);
      let jsonResponse = await response.json();
      this.listOfTitles = jsonResponse.items;
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
  onChangeinput(e) {
    this.inputText = e.currentTarget.value;
  }
  @computed get getInputText() {
    return this.inputText;
  }
  @computed get buttonStatus() {
    if (this.inputText === "")
      return true;
    else return false;
  }
}

export default new TitelListStore();