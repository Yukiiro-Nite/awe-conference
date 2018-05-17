import React, { Component } from 'react';
import './sessionModal.css';

class SessionModal extends Component {
  render() {
    const { session, closeSessionModal, myAgenda, addToAgenda, removeFromAgenda } = this.props;
    if(!session){
      return null;
    }
    const { post_title, post_excerpt, time, end_time, location, id } = session;
    const inAgenda = myAgenda[id];

    return (
      <div className="SessionModal-wrapper" onClick={ closeSessionModal }>
        <div className={`SessionModal ${inAgenda ? 'in-agenda': ''}`} title={post_excerpt} onClick={(event) => event.stopPropagation()}>
          <h4 className="SessionModal-title">{post_title}</h4>
          <h4 className="SessionModal-time">{time} - {end_time} in {location}</h4>
          <p className="SessionModal-details">{post_excerpt}</p>
          {
            inAgenda
              ? <button onClick={() => removeFromAgenda(id)}>Remove from my agenda</button>
              : <button onClick={() => addToAgenda(id)}>Add to my agenda</button>
          }
        </div>
      </div>
    )
  }
}

export default SessionModal;