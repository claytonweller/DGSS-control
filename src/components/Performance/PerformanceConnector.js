import React from 'react';
import { client } from '../../';

export class PerformanceConnector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDataIndex: 0,
    };
  }

  render() {
    const { activePerformances } = this.props;
    let display = this.noPerformances();
    if (activePerformances && activePerformances.length) {
      display = this.performancesAvailable();
    }
    if (Object.keys(this.props.performance).length) {
      display = this.joinedPerfomance();
    }

    return (
      <div>
        <h3>Join Active Performance</h3>
        {display}
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const { selectedDataIndex } = this.state;
    const selectedPerformance = this.props.activePerformances[selectedDataIndex];
    const { id: performance_id, current_module_title } = selectedPerformance;
    this.props.setPerformance(selectedPerformance);
    const payload = {
      action: 'join-performance',
      params: { current_module_title, performance_id, source: 'control' },
    };
    client.send(JSON.stringify(payload));
  }

  noPerformances() {
    return <div>No shows to connect to</div>;
  }

  performancesAvailable() {
    const performanceOptions = this.props.activePerformances
      .sort((a, b) => b.id - a.id)
      .map((p, i) => {
        return (
          <option value={i} key={p.id}>
            {p.id}
          </option>
        );
      });

    const joinButton = <input type="submit" value="Join" />;

    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label htmlFor="activePerformances">Choose a performance:</label>
          <select
            onChange={(event) => this.setState({ selectedDataIndex: event.target.value })}
            value={this.state.selectedDataIndex}
            id="activePerformances"
          >
            {performanceOptions}
          </select>
          {joinButton}
        </form>
      </div>
    );
  }

  joinedPerfomance() {
    return (
      <div>
        <h4>Joined Peformance!</h4>
        <div>{JSON.stringify(this.props.performance)}</div>
      </div>
    );
  }
}
