import React from 'react';
import './App.css';
import { manageMessage } from './actions';
import { client } from './index'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentConn: {
        id: "",
        performance_id: 0,
        attendee_id: 0,
        aws_connection_id: "",
        created_at: "",
        source: "control"
      }
    };
  }

  componentWillMount() {
    client.onopen = message => {
      const params = { source: 'control' }
      console.log('WebSocket Client Connected\n', message);
      // On AWS it works to send to the client in the onOpen, but for the local service this
      // doesn't work. So we manage that case inside of the manageMessage function
      client.send(JSON.stringify({ action: 'connect-source', params }))
    };
    client.onmessage = (message) => {
      const raw = JSON.parse(message.data)
      // We pass through the message, and the component. That way we can manage state based upon the
      // information the client gives us
      manageMessage(raw, this)
    };
  }

  allClick() {
    console.log('ALL CLICK')
    const params = { source: 'control' }
    client.send(JSON.stringify({ action: 'all', params }))
  }

  randClick() {
    console.log('RANDOM CLICK')
    const params = {
      source: 'control',
      id: this.state.currentConn.id
    }
    console.log('PARAMS', params)
    client.send(JSON.stringify({ action: 'random', params }))
  }

  sourceClick() {
    console.log('SOURCE CLICK')
    const params = {
      source: 'control',
    }
    client.send(JSON.stringify({ action: 'source', params }))
  }

  render() {
    return (
      <div className="App" >
        <h1>Control</h1>
        <button onClick={() => this.allClick()}>To All</button>
        <button onClick={() => this.randClick()}>To Random</button>
        <button onClick={() => this.sourceClick()}>To Source</button>
        <h1>Current count {this.state.count}</h1>
        <div style={{ width: '95vw', wordWrap: 'break-word' }}>{JSON.stringify(this.state.currentConn)}</div>
      </div>
    )
  }
}

export default App;
