import React, { Component } from 'react';
import './sessionModal.css';

class SessionModal extends Component {
  render() {
    const { session, closeSessionModal } = this.props;
    if(!session){
      return null;
    }
    const { post_title, post_excerpt, time, end_time, location} = session;

    return (
      <div className="SessionModal-wrapper" onClick={ closeSessionModal }>
        <div className="SessionModal" title={post_excerpt} onClick={(event) => event.stopPropagation()}>
          <h4 className="SessionModal-title">{post_title}</h4>
          <h4 className="SessionModal-time">{time} - {end_time} in {location}</h4>
          <p className="SessionModal-details">{post_excerpt}</p>
        </div>
      </div>
    )
  }
}

export default SessionModal;