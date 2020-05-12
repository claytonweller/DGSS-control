import React from 'react';
import { client } from '../../';

export class ModulePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDataIndex: 0,
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { moduleTitles, currentModule } = this.props;
    const { selectedDataIndex } = this.state;
    const selectedModule = moduleTitles[selectedDataIndex];
    const payload = {
      action: 'jump-to-module',
      params: { moduleTitle: selectedModule, currentModule },
    };
    client.send(JSON.stringify(payload));
  }

  moduleOptions() {
    return this.props.moduleTitles.map((m, i) => {
      return (
        <option value={i} key={`module${i}`}>
          {m}
        </option>
      );
    });
  }

  render() {
    return (
      <div>
        <p />
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label htmlFor="activePerformances">Modules:</label>
          <select
            onChange={(event) => this.setState({ selectedDataIndex: event.target.value })}
            value={this.state.selectedDataIndex}
            id="activePerformances"
          >
            {this.moduleOptions()}
          </select>
          <input type="submit" value="Jump" />
        </form>
      </div>
    );
  }
}
