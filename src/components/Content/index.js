import React, { Component } from 'react';
import Item from "../Item";
import { observer, inject } from 'mobx-react';
import InfoMassage from '../InfoMessage';
import { ContentView } from './style'


@inject('titleListStore')
@observer
class Content extends Component {
  renderContent() {
    if (this.props.titleListStore.status !== "done") {
      return (<InfoMassage status={this.props.titleListStore.status} />);
    }
    else {
      return this.props.titleListStore.listOfTitles.map((item) => {
        return (<Item
          key={item.id}
          title={item.title}
          placeOfPublication={item.placeOfPublication} />
        )
      });
    }
  }

  render() {
    return (
      <ContentView>
        {this.renderContent()}
      </ContentView>
    )
  }
}
export default Content;