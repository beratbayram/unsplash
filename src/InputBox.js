import React from 'react';

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <input
                type="text"
                id="search-box"
                placeholder="Query"
                defaultValue={this.props.query}
                onChange={event => {this.props.onQueryChange({ text: event.target.value }) }}>
            </input>
        );
    }
}

export default InputBox;