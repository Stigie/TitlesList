import React, { Component } from 'react';
import Item from "../Item";
import styles from "./styles.module.css";
import { observer, inject } from 'mobx-react';
import InfoMassage from '../InfoMessage';


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
      <content className={styles.content}>
        {this.renderContent() }
      </content>
    )
  }
}
export default Content;