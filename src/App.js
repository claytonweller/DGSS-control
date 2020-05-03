import React from 'react';
import './App.css';
import { manageMessage } from './actions';
import { client } from './index';
import { Performance } from './components/Performance/';
import { Preshow } from './components/modules/Preshow/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    const moduleHash = {
      preshow: <Preshow moduleState={this.state.moduleState} />,
      default: <div>No show yet</div>,
    };

    const currentModuleTitle = this.state.currentModule.module.title;
    const moduleInterface = currentModuleTitle ? moduleHash[currentModuleTitle] : moduleHash.default;

    return (
      <div className="App">
        <h1>Control</h1>
        {moduleInterface}
        <Performance performance={this.state.performance} />
      </div>
    );
  }
}

export default App;
