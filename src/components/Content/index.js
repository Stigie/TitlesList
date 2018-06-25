import React, { Component } from 'react';
import Item from "../Item";
import styles from "./styles.module.css";
import { observer, inject } from 'mobx-react';
import InfoMassage from '../InfoMassage';


@inject('TitelListStore')
@observer
class Content extends Component {
  renderInfoBlock = () => {
    if (this.props.TitelListStore.status !== "done") {
      return (<InfoMassage status={this.props.TitelListStore.status} />);
    }
  }
  renderListOfItems = () => {
    let listToRender = this.props.TitelListStore.listOfTitles.map(
      (item) => { 
        return (<Item 
          key={item.id} 
          title={item.title} 
          placeOfPublication={item.place_of_publication} />
        )
      }
    );
    return listToRender;
  }
  render() {
    return (
      <content className={styles.content}>
        { this.renderInfoBlock() }
        { this.renderListOfItems() }
      </content>
    )
  }
}
export default Content;