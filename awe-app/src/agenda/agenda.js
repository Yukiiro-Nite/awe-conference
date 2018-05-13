import React, { Component } from 'react';
import Day from './day';
import './agenda.css';

class Agenda extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 0
    };
    this.setTab = this.setTab.bind(this);
  }

  setTab(index) {
    this.setState({selectedTab: index});
  }

  render() {
    const { agenda } = this.props;
    const dates = agenda.map(day => day.sessions[0].date);
    const selectedTab = this.state.selectedTab;

    return (
      <div className="Agenda">
        <a
          href="http://santaclaraconventioncenter.org/wp-content/uploads/2017/04/SC_Floorplan-2017.pdf"
          target="_blank"
        >Floor plan</a>
        <div className="Agenda-dates">
          {
            dates.map((date, index) =>
              <h2
                onClick={() => this.setTab(index)}
                className={`Agenda-date ${selectedTab === index ? 'selected' : ''}`}
              >{date}</h2>
            )
          }
        </div>
        <Day day={agenda[selectedTab]} />
      </div>
    )
  }
}

export default Agenda;