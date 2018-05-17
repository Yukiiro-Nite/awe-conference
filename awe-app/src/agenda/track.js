import React, { Component } from 'react';
import Session from './session';
import './track.css';

class Track extends Component {
  render() {
    const { track, sessions, showSessionModal, myAgenda } = this.props;
    // console.log(sessions);
    return (
      <div className="Track">
        <h3 className="Track-title" title={track}>{track.replace('Track', '')}</h3>
        <div className="Track-sessions">
          {
            sessions.map(session => <Session
                key={session.id}
                session={session}
                showSessionModal={showSessionModal}
                inAgenda={myAgenda[session.id]}
              />
            )
          }
        </div>
      </div>
    )
  }
}

export default Track;