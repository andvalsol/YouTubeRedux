import React, {Component} from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    onInputChange(term) {
        this.props.onSearchTermChanged(term);

        this.setState({term})
    }

    // When a component's value is only changed by state is called a controlled component
    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event.target.value)}/>
            </div>
        )
    }
}

export default SearchBar;
