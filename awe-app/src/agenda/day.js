import React, { Component } from 'react';
import Track from './track';
import SessionModal from './sessionModal';
import './day.css';

class Day extends Component {
  constructor() {
    super();
    this.state = {
      session: undefined
    };
    this.showSessionModal = this.showSessionModal.bind(this);
    this.closeSessionModal = this.closeSessionModal.bind(this);
  }
  showSessionModal(session) {
    this.setState({session});
  }
  closeSessionModal() {
    this.setState({session: undefined});
  }
  render() {
    const { day } = this.props;
    const sessionsByTrack = day.sessions.reduce((acc, session) => {
      session.tracks.forEach(track => {
        if(!acc[track.name]) {
          acc[track.name] = [];
        }
        acc[track.name].push(session);
      });

      return acc;
    }, {});
    const tracks = Object.keys(sessionsByTrack);

    return (
      <div className="Day">
        <div className="Day-tracks">
          {
            tracks.map(track => <Track key={track} track={track} sessions={sessionsByTrack[track]} showSessionModal={this.showSessionModal}/>)
          }
        </div>
        <SessionModal session={this.state.session} closeSessionModal={this.closeSessionModal} />
      </div>
    )
  }
}

export default Day;