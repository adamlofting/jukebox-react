import React from 'react';
import NowPlaying from './../../components/now-playing';
import Volume from './../../components/volume';
import Vote from './../../components/vote';

class SidePanel extends React.Component {
  
  volumeHTML(volume) {
    return <Volume volume={volume} />
  }

  nowPlayingHTML(track, time) {
    return <NowPlaying track={track} time={time} />
  }

  voteHTML(track, userId) {
    return <Vote track={track} userId={userId} />
  }

  render() {
    return (
      <div className='ui-side-panel'>
        { this.volumeHTML(this.props.volume) }
        { this.nowPlayingHTML(this.props.track, this.props.time) }
        { this.voteHTML(this.props.track, this.props.userId) }
      </div>
    );
  }
}

export default SidePanel;
