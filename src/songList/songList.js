import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../action';

class SongList extends Component {


  songList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.id}>
          <div className="right floated content" >
            <button className="ui button primary"
              onClick={() => this.props.selectSong(song)}>
              Select</button>
          </div>
            <div className="content">{song.title}</div>
        </div>
      )
    }
    )
  }

  render() {
    return (
      <div className="ui divided list">
        {this.songList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
 // console.log(this.state.songList === 'undefined' ? "aaa" : "bbb"); 
  return {
    songs: state.songLists
  };
}
export default connect(mapStateToProps, { selectSong })(SongList);