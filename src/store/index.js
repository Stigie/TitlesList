import { observable, computed, action, runInAction } from 'mobx';

class TitelListStore {
  @observable listOfTitles;
  @observable status;
  @observable inputText;

  constructor() {
    this.status = "pending"
    this.listOfTitles = [];
    this.loadData().then(
      rez => {
        this.listOfTitles = rez;
        if (this.listOfTitles.length === 0) {
          this.status = "empty";
        } else {
          this.status = "done";
        }
      },
      (er) => {
        this.status = "error";
        console.log(er);
      }
    );
    this.inputText = "";
  }
  @action('load DATA')
  async loadData() {
    this.status = "pending";
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
    let searchText =  this.inputText.toLowerCase();
    this.status = "pending";
    this.listOfTitles = [];
    try {
      this.listOfTitles = await this.loadData();
      this.listOfTitles = this.listOfTitles.filter(title => title.title.toLowerCase() === searchText);
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
        this.status = "error"
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