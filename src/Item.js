import React from 'react';

import Database from './database.js';

class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoURL: null,
            websiteURL: null,
            altDescription: null,
        };
    }

    async componentDidMount() {
        const promiseData = Database
            .getImage(this.props.query, this.props.collectionId, this.props.pageNum);
        const image = (await promiseData).data.results[0];

        this.props.parentState({isFoundAnyResult: 1});
        this.setState({
            photoURL: image.urls.regular,
            websiteURL: image.links.html,
            altDescription: image.alt_description,
        });
    }

    async componentDidUpdate(prevProps, prevState) {
        if (this.props.collectionId !== parseInt(prevProps.collectionId)
            || this.props.query !== prevProps.query) {
            console.log("componentDidUpdate");
            const promiseData = Database
                .getImage(this.props.query, this.props.collectionId, this.props.pageNum);
            const image = (await promiseData).data.results[0];

            if (image === undefined)
                this.setState({
                    photoURL: null,
                    websiteURL: null,
                    altDescription: null,
                });
            else {
                this.props.parentState({isFoundAnyResult: 1});
                this.setState({
                    photoURL: image.urls.regular,
                    websiteURL: image.links.html,
                    altDescription: image.alt_description,
                });
            }
        }
    }

    render() {
        return this.setState == null ? <div className="row" ></div> : (
            <div className="row" >
                <a href={this.state.websiteURL}>
                    <img src={this.state.photoURL}
                        alt={this.state.altDescription}>
                    </img>
                </a>
            </div>
        );
    }
}

export default Item;