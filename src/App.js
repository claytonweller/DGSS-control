import React from 'react';
import './App.css';
import { manageMessage } from './actions';
import { client } from './index';
import { Performance } from './components/Performance/';
import { Module } from './components/modules/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePerformances: [],
      attendeeCount: 0,
      currentModule: {
        module: {},
        instance: {},
      },
      moduleState: {},
      performance: {},
      currentConn: {
        id: '',
        performance_id: 0,
        attendee_id: 0,
        aws_connection_id: '',
        created_at: '',
        source: 'control',
      },
    };
  }

  componentDidMount() {
    client.onopen = (message) => {
      const params = { source: 'control' };
      console.log('WebSocket Client Connected\n', message);
      // On AWS it works to send to the client in the onOpen, but for the local service this
      // doesn't work. So we manage that case inside of the manageMessage function
      client.send(JSON.stringify({ action: 'connect-source', params }));
    };
    client.onmessage = (message) => {
      const raw = JSON.parse(message.data);
      // We pass through the message, and the component. That way we can manage state based upon the
      // information the client gives us
      manageMessage(raw, this);
    };
  }

  setPerformance(performance) {
    this.setState({ performance });
  }

  render() {
    return (
      <div className="App">
        <h1>Control</h1>
        <Module
          currentConn={this.state.currentConn}
          currentModule={this.state.currentModule}
          moduleState={this.state.moduleState}
        />
        <Performance
          performance={this.state.performance}
          currentModule={this.state.currentModule}
          currentConn={this.state.currentConn}
          activePerformances={this.state.activePerformances}
          setPerformance={(p) => this.setPerformance(p)}
        />
      </div>
    );
  }
}

export default App;
