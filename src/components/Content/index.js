import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import Item from '../Item';
import InfoMassage from '../InfoMessage';
import ContentView from './style';


@inject('titleListStore')
@observer
class Content extends React.Component {
  renderContent() {
    const { titleListStore } = this.props;
    if (titleListStore.status !== 'done') {
      return (<InfoMassage status={titleListStore.status} />);
    }
    return titleListStore.listOfTitles.map(item => (<Item
      key={item.id}
      title={item.title}
      placeOfPublication={item.placeOfPublication} />
    ));
  }

  render() {
    return (
      <ContentView>
        {this.renderContent()}
      </ContentView>
    );
  }
}

Content.propTypes = {
  titleListStore: PropTypes.object,
  listOfTitles: PropTypes.object,
  id: PropTypes.string,
  title: PropTypes.string,
  placeOfPublication: PropTypes.string,
};

export default Content;
