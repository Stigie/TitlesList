import { types } from 'mobx-state-tree';

const Title = types.model('Title', {
  id: types.string,
  title: types.string,
  placeOfPublication: types.string,
});

export default Title;
