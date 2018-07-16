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
    return jsonResponse.map(item => ({
      id: item.id,
      title: item.title,
      placeOfPublication: item.placeOfPublication,
    }));
  } catch (error) {
    return error;
  }
}

export const TitleListStore = types.model('TitleListStore', {
  listOfTitles: types.array(Title),
  status: types.enumeration('Status', ['pending', 'done', 'error', 'empty', 'start']),
  inputText: types.string,
}).views(self => ({
  get isButtonDisabled() {
    return !self.inputText;
  },
})).actions((self) => {
  function onChangeinput(mess) {
    self.inputText = mess;
  }
  const fetchTitles = flow(function* fetchTitles() {
    self.listOfTitles = [];
    self.status = 'pending';
    try {
      self.listOfTitles = yield clickOnsubmit(self.inputText);
      self.status = 'done';
    } catch (error) {
      self.status = 'error';
    }
  });

  return { fetchTitles, onChangeinput };
});
