import { types, flow } from 'mobx-state-tree';

export const Title = types.model('Title', {
  id: types.string,
  title: types.string,
  placeOfPublication: types.string,
});

async function clickOnsubmit(searchText) {
  const url = `http://localhost:3000/titles?q=${searchText}`;
  try {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse.map(item => new Title(item.id, item.title, item.placeOfPublication));
  } catch (error) {
    return error;
    // console.log(error);
  }
}

export const TitleListStore = types.model('TitleListStore', {
  listOfTitles: types.array(Title),
  status: types.enumeration('Status', ['pending', 'done', 'error', 'empty']),
  inputText: types.string,
}).actions(self => ({
  fetchTitles: flow(function* fetchTitles() {
    self.listOfTitles = [];
    self.status = 'pending';
    try {
      self.listOfTitles = yield clickOnsubmit(self.inputText);
      self.status = 'done';
    } catch (error) {
      // console.error('Failed to fetch projects', error);
      self.status = 'error';
    }
  }),
}));
