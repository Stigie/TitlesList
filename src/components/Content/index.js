import React from 'react';
import { observer, inject } from 'mobx-react';
import Item from '../Item';
import InfoMassage from '../InfoMessage';
import ContentView from './style';


@inject('titleListStore')
@observer
class Content extends React.Component {
  renderContent() {
    if (this.props.titleListStore.status !== 'done') {
      return (<InfoMassage status={this.props.titleListStore.status} />);
    }
    return this.props.titleListStore.listOfTitles.map(item => (<Item
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
export default Content;
