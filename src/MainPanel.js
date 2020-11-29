import React from 'react';
import Item from './Item.js'

class MainPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 1,
      isFoundAnyResult: 0,
    }
  }
  render() {
    let itemList = [[], [], []];
    for (let i = 1; i <= this.state.limit * 3; i += 3) {
      for (let j = 0; j < 3; j++) {
        let num = this.props.page * (i + j);
        itemList[j].push(
          <Item key={"item" + num} query={this.props.query}
            collectionId={this.props.collectionId} pageNum={num}
            parentState={this.setState.bind(this)} />)
      }
    }
    let noResultStyle = this.state.isFoundAnyResult ? null : { display: "block" };
    let loadMoreStyle = !this.state.isFoundAnyResult ? { display: "none" } : { display: "block" };
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.isFoundAnyResult=0;

    return (
      <div className="MainPanel">
        <div id="busy-indicator">
          <img id="busy-img" src="loading.gif" alt="busy indicator"></img>
        </div>
        <main>
          <div key="column0" className="column">
            {itemList[0]}
          </div>
          <div key="column1" className="column">
            {itemList[1]}
          </div>
          <div key="column2" className="column">
            {itemList[2]}
          </div>
        </main>
        <div id="error-panel">
          <p>Something went wrong. Please refresh page.</p>
        </div>
        <div id="no-result-panel" style={noResultStyle}>
          <p>No Result</p>
        </div>
        <button id="load-more" onClick={() => this.setState((state, props) => {
          return { limit: state.limit + 1 }
        })} style={loadMoreStyle}>
          Load More
        </button>
      </div >
    );

  }
}

export default MainPanel;