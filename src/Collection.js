import React from 'react';

import Database from './database.js';

class Collection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        };
    }

    async componentDidMount() {
        const promiseData = Database.getCollectionList();

        let collectionList = (await promiseData);

        collectionList = collectionList.map((value, index) => {
            const key = "li-" + index + 1; //first key is "collection"
            return (
                <li
                    onClick={() => this.props.onStateChange
                        ({ collectionId: value.id, collectionTitle: value.title })}
                    key={key}
                >
                    {value.title}
                </li>
            )
        })

        this.setState({
            list: collectionList
        });
    }

    render() {
        return (
            <ul id="collections-list">
                <li key="li-0" onClick={() => this.props.onStateChange({
                    collectionTitle: "Collection", collectionId: 0,
                })}>
                    Collection
                </li>{this.state.list}
            </ul >
        );
    }
}

export default Collection;