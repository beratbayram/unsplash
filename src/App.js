import './App.css';
import './style.css'

import React from 'react';
import TopPanel from './TopPanel.js'
import MainPanel from './MainPanel.js'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "blue",
            collectionId: 0,
            collectionTitle: "Collection",
            page: 1,
        }
    }

    render() {
        return (
            <div className="App" >
                <TopPanel
                    query={this.state}
                    onQueryChange={this.setState.bind(this)}
                />
                <MainPanel
                    query={this.state.text}
                    collectionId={this.state.collectionId}
                    page={this.state.page}
                />
            </div>
        );
    }
}

export default App;
