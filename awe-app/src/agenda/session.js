import React, { Component } from 'react';
import './session.css';
const baseDate = 'May 30, 2018 ';
const dayStart = new Date('May 30, 2018 9:00 am');

class Session extends Component {
  render() {
    const { session, showSessionModal, inAgenda } = this.props;
    const { post_title, post_excerpt, time, end_time} = session;
    const startDate = new Date(baseDate + time);
    const endDate = new Date(baseDate + end_time);
    const startPosition = diffInMinutes(startDate, dayStart);
    const height = diffInMinutes(endDate, startDate);
    const style = {
      top: `${startPosition * 5}px`,
      height: `${height * 5}px`
    };

    return (
      <div className={`Session ${inAgenda ? 'in-agenda': ''}`} title={post_excerpt} style={style} onClick={() => showSessionModal(session)}>
        <h4 className="Session-title">{post_title}</h4>
        <h4 className="Session-time">{time} - {end_time}</h4>
        <p className="Session-details">{post_excerpt}</p>
      </div>
    )
  }
}

export default Session;

function diffInMinutes(d1, d2) {
  return Math.floor((d1.getTime() - d2.getTime()) / 60000);
}