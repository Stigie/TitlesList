import React, { Component } from 'react';
import Item from "../Item";
import styles from "./styles.module.css";
import { observer, inject } from 'mobx-react';
import InfoMassage from '../InfoMassage';

@inject('TitelListStore')
@observer
class Content extends Component {
  render() {
    const { TitelListStore } = this.props;
    return (
      <content className={styles.content}>
        <If true={TitelListStore.state !== "done"}>
          <InfoMassage state={TitelListStore.state} />
        </If>
        <For each="listOfTitles" in={TitelListStore.listOfTitles}>
          <Item
            key={listOfTitles.id}
            title={listOfTitles.title}
            placeOfPublication={listOfTitles.place_of_publication} />
        </For>
      </content>
    )
  }
}
export default Content;