import React from 'react';

export function Bootcamp(props) {
  return (
    <div>
      <h3>Bootcamp</h3>
      <p></p>
      <div>Fact Button</div>
      <div>Metric Button</div>
      <div>Logo Button</div>
      <div>Test</div>
      <button onClick={props.nextModule}>Next</button>
    </div>
  );
}
