// Create a new component and it should produce some html
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash'
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import VideoShow from './components/videoShow'
import Nav from './components/nav'

const youTubeApiKey = 'AIzaSyBLs98PtzDDjxhn7K7nYDKPqwkfAsOn5tM'; 


class App extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
        }

        this.videoSearch('football')
}


videoSearch(term) {
    YTSearch({key: youTubeApiKey, term: term}, (videos) => {

        this.setState({ 
            videos,
            selectedVideo: videos[0]
      })
        
        console.log(videos)
  })
}

     

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
            <Nav />
            <div className="container">
                <SearchBar onVideoSearch={videoSearch}  />
                <div className="row">
                    <VideoShow video={this.state.selectedVideo} />

                    <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} 
                    />
                </div>
            </div>
            </div>
        )

    }


}

// RENDER TO THE DOM
ReactDOM.render(<App />, document.querySelector('.app'))


