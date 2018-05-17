import React, { Component } from 'react';
import Day from './day';
import './agenda.css';

class Agenda extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 0,
      myAgenda: {},
      filterView: false
    };
    this.setTab = this.setTab.bind(this);
    this.addToAgenda = this.addToAgenda.bind(this);
    this.removeFromAgenda = this.removeFromAgenda.bind(this);
    this.filterView = this.filterView.bind(this);
    this.toggleImportExport = this.toggleImportExport.bind(this);
    this.setAgenda = this.setAgenda.bind(this);
  }

  setTab(index) {
    this.setState({selectedTab: index});
  }

  setAgenda(agendaStr) {
    try{
      const agenda = JSON.parse(agendaStr);
      this.setState({myAgenda: agenda});
    } catch(e) {
      console.log(`problem setting agenda: `, e);
    }
  }

  addToAgenda(id) {
    id = id.toString();
    this.setState({myAgenda: {...this.state.myAgenda, [id]: true}});
  }

  removeFromAgenda(id) {
    id = id.toString();
    const {[id]:removed, ...rest} = this.state.myAgenda;
    this.setState({myAgenda: rest});
  }

  filterView(view) {
    this.setState({filterView: view});
  }

  toggleImportExport() {
    this.setState({showImportExport: !this.state.showImportExport});
  }

  render() {
    let { agenda } = this.props;
    const {selectedTab, myAgenda, filterView, showImportExport} = this.state;
    agenda = filterView
      ? agenda.map(day => ({...day, sessions: day.sessions.filter(({id}) => myAgenda[id.toString()])}))
      : agenda;
    const dates = agenda.filter(day => day.sessions.length > 0).map(day => day.sessions[0].date);

    return (
      <div className="Agenda">
        <a
          href="http://santaclaraconventioncenter.org/wp-content/uploads/2017/04/SC_Floorplan-2017.pdf"
          target="_blank"
        >Floor plan</a>
        <div>
          <button onClick={() => this.filterView(false)}>View All</button>
          <button onClick={() => this.filterView(true)}>View My Agenda</button>
          <button onClick={() => this.toggleImportExport()}>{showImportExport ? 'Hide Import/Export' : 'Import/Export'}</button>
          {
            showImportExport && <div>
              <label>
                <h4>Export:</h4>
                <pre>{JSON.stringify(myAgenda)}</pre>
              </label>
              <label>
                <h4>Import:</h4>
                <textarea onBlur={(event) => this.setAgenda(event.target.value)} defaultValue={JSON.stringify(myAgenda)}></textarea>
              </label>
            </div>
          }
        </div>
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
        <Day
          day={agenda[selectedTab]}
          myAgenda={myAgenda}
          addToAgenda={this.addToAgenda}
          removeFromAgenda={this.removeFromAgenda}
        />
      </div>
    )
  }
}

export default Agenda;