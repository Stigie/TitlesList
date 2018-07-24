import { types, flow } from 'mobx-state-tree';
import Title from './title';

async function getTitleList(searchText) {
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

const TitleListStore = types.model('TitleListStore', {
  listOfTitles: types.optional(types.array(Title), []),
  status: '',
  inputText: '',

}).views(self => ({
  get isButtonDisabled() {
    return !self.inputText;
  },
})).actions((self) => {
  function onChangeInput(value) {
    self.inputText = value;
  }
  const fetchTitles = flow(function* fetchTitles() {
    self.listOfTitles.clear();
    self.status = 'pending';
    try {
      self.listOfTitles = yield getTitleList(self.inputText);
      self.status = 'done';
      if (!self.listOfTitles.length) self.status = 'empty';
    } catch (error) {
      self.status = 'error';
    }
  });

  return { fetchTitles, onChangeInput };
});
export default TitleListStore;
