import { observable, computed, action, runInAction } from 'mobx';

class TitelListStore {
  @observable listOfTitles;
  @observable state;
  @observable inputText;

  constructor() {
    this.state = "pending"
    this.listOfTitles = [];
    this.loadData().then(
      rez => {
        this.listOfTitles = rez;
        if (this.listOfTitles.length === 0) {
          this.state = "empty";
        } else {
          this.state = "done";
        }
      },
      (er) => {
        this.state = "error";
        console.log(er);
      }
    );
    this.inputText = "";

    console.log(this.listOfTitles);
  }
  @action('load DATA')
  async loadData() {
    this.state = "pending";
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(DATA.list);
        }
        catch (error) {
          reject(error);
        }
      }, 1000);
    });
  }
  @action('click on submit, filter data')
  async clickOnsubmit(e) {
    e.preventDefault();
    let searchText = e.currentTarget.children.Search.value.toLowerCase();
    this.state = "pending";
    this.listOfTitles = [];
    try {
      this.listOfTitles = await this.loadData();
      this.listOfTitles = this.listOfTitles.filter(title => title.title.toLowerCase() === searchText);
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
    console.log(this.listOfTitles);


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
const DATA = {
  list: [
    {
      title: 'Michigan City dispatch.',
      placeOfPublication: 'Burton, Mich.',
      id: "/lccn/sn87056278/"
    },
    {
      title: 'Michigan voice.',
      placeOfPublication: 'Lansing, Mich.',
      id: '/lccn/sn93023625/'
    },
    {
      title: 'The Michigan state echo.',
      placeOfPublication: 'Lansing, Mich.',
      id: '/lccn/sn2001061626/'
    },
    {
      title: 'The Petoskey evening news and Northern Michigan review.',
      placeOfPublication: 'Petoskey, Mich.',
      id: '/lccn/sn96077417/'
    },
    {
      title: 'The Michigan Whig.',
      placeOfPublication: 'Ann Arbor, Washtenaw Co., M.T. [i.e. Michigan Territory]',
      id: '/lccn/sn95077650/'
    },
    {
      title: 'University chronicle.',
      placeOfPublication: 'University of Michigan, Ann Arbor, Mich.',
      id: '/lccn/sn98065395/'
    },
    {
      title: 'The Michigan bulletin.',
      placeOfPublication: 'Lansing, Mich.',
      id: '/lccn/sn2001061641/'
    }
  ]
};


export default new TitelListStore();