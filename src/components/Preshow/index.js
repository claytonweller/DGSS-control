import React from 'react';
import { client } from '../../'

export function Preshow(props) {

  const startPerformance = () => {
    const payload = JSON.stringify({
      action: 'preshow-start-performance',
      params: {}
    })
    client.send(payload)
  }

  return (
    <div>
      <h3>Preshow</h3>
      <div>Expected audience count</div>
      <div>Current audience list</div>
      <div>Important Questions data</div>
      <button onClick={() => startPerformance()}>Start</button>
    </div>
  )
}