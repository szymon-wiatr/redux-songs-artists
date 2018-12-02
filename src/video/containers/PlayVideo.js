import React from 'react';
import { connect } from 'react-redux'
import youtube from '../../apis/youtube';
// import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';
import localStorageService from '../../apis/localStorage';

class PlayVideo extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('metallica');
  }

  componentDidUpdate(prevProps) {
    if (this.props.artists.length && prevProps.artists.length !== this.props.artists.length) {
      this.onTermSubmit(this.props.artists[this.props.artists.length-1].text);
    }
    if (this.props.artists.length === prevProps.artists.length) {
      this.props.artists.map((artist, i) => {
        if (!(prevProps.artists[i].superliked === artist.superliked) && artist.superliked) {
          this.onTermSubmit(artist.text);
        }
      return null;        
      });
    }
    localStorageService.set('artists', this.props.artists);
  }
 
  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        type: 'video'
      }
    });
    const videos = response.data.items;

    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        {/* <SearchBar onFormSubmit={this.onTermSubmit} /> */}
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps
)(PlayVideo)
