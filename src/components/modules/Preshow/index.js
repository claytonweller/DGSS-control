import React from 'react';
import { client } from '../../../';
import { CurrentAudience } from './CurrentAudience';

export function Preshow(props) {
  const startPerformance = () => {
    const payload = JSON.stringify({
      action: 'preshow-start-performance',
      params: {},
    });
    client.send(payload);
  };

  return (
    <div>
      <h3>Preshow</h3>
      <CurrentAudience attendees={props.moduleState.attendees} />
      <p></p>
      <div>Audience Data</div>
      <div>Presales data</div>
      <button onClick={() => startPerformance()}>Start</button>
    </div>
  );
}
