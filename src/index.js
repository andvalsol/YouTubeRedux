import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {SearchBar, VideoList, VideoDetail} from "./components";
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = 'ADD OWN KEY';

// Create a new component in order to render some new HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
        }

        this.videoSearch('')
    }

    videoSearch(term) {
        // Add here a throttle
        YTSearch({
            key: API_KEY,
            term: term,
        }, (videos) => this.setState({
            videos: videos,
            selectedVideo: videos[0]
        }))
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChanged={videoSearch}/>
                {(this.state.selectedVideo !== null) ? <VideoDetail video={this.state.selectedVideo}/> : <div>Loading</div>}
                <VideoList
                    onVideoSelected={(selectedVideo) => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        )
    }

}

// Take this component's generated HTML and add it into the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
