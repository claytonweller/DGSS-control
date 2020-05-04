import React from 'react';
import { client } from '../../../';
export function Bootcamp({ moduleState, currentConn, nextModule }) {
  const click = (action) => {
    const payload = JSON.stringify({
      action,
      params: { performance_id: currentConn.performance_id },
    });
    client.send(payload);
  };

  const startTestButton = <button onClick={() => click('bootcamp-start-test')}>TEST</button>;
  const endTestButton = <button onClick={() => click('bootcamp-end-test')}>END TEST</button>;

  const testButton = moduleState.testing ? endTestButton : startTestButton;

  return (
    <div>
      <h3>Bootcamp</h3>
      <p></p>
      <button onClick={() => click('bootcamp-get-fact')}>FACT</button>
      <button onClick={() => click('bootcamp-get-metric')}>METRIC</button>
      <button onClick={() => click('bootcamp-to-logo')}>LOGO</button>
      {testButton}
      <button onClick={nextModule}>Next</button>
    </div>
  );
}
