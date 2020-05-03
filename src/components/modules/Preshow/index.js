import React from 'react';
import { CurrentAudience } from './CurrentAudience';

export function Preshow(props) {
  return (
    <div>
      <h3>Preshow</h3>
      <CurrentAudience attendees={props.moduleState.attendees} />
      <p></p>
      <div>Audience Data</div>
      <div>Presales data</div>
      <button onClick={props.nextModule}>Start</button>
    </div>
  );
}
