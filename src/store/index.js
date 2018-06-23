import { observable, computed, action } from 'mobx';

class TitelListStore {
  @observable listOfTitles;
  @observable state;
  @observable inputText;

  constructor() {
    this.listOfTitles = [];
    this.state = "pending"
    this.loadData();
    this.inputText = "";
    //console.log(this.listOfTitles);
  }
  @action('load DATA')
  async loadData() {
    this.state = "pending";
    setTimeout(() => {
      this.listOfTitles = DATA.list;
      this.state = "done";
    }, 1000);

  }
  @action('click on submit, filter data')
  async clickOnsubmit(e) {
    e.preventDefault();
    this.state = "pending";
    this.listOfTitles = [];
    await setTimeout((e) => {
      console.log(e);
      //this.listOfTitles = DATA.list.filter(title => title.title.toLowerCase() === e.currentTarget.children.Search.value.toLowerCase())
    }, 1000);
    
  }
  @action('onChange input')
  onChangeinput(e) {
    this.inputText = e.currentTarget.value;
    //console.log(this.inputText);
  }
  @computed get getInputText() {
    return this.inputText;
  }
  @computed get buttonState() {
    if (this.inputText === "")
      return true;
    else return false;
  }
  @computed get loadState() {
    if (this.state === "pending" || this.state === "emptyAnswer") return true;
    else return false;
  }
}
const DATA = {
  list: [
    {
      title: 'John Smith',
      placeOfPublication: 'http://lorempixel.com/100/100/',
      id: "/lccn/sn87056278/"
    },
    {
      title: 'John Smith',
      placeOfPublication: 'http://lorempixel.com/100/100/',
      id: '/lccn/sn93023625/'
    }
  ]
};


export default new TitelListStore();