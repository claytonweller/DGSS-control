import React from 'react';
import { client } from '../../..';

export function Boatrace({ moduleState }) {
  const titleClick = () => {
    client.send(JSON.stringify({ action: 'boatrace-title', params: {} }));
  };

  const boatSizeClick = (num) => {
    client.send(JSON.stringify({ action: 'boatrace-create-boats', params: { boatCount: num } }));
  };
  const boatButtons = () => {
    const possibleNumbers = [2, 3, 4, 5];
    const buttons = possibleNumbers.map((num) => {
      return (
        <div key={`boats-${num}`}>
          <div>BoatSize ~ {Math.floor(moduleState.audienceCount / num)}</div>
          <button onClick={() => boatSizeClick(num)} value={num}>
            {num} Boats
          </button>
        </div>
      );
    });
    return buttons;
  };

  let display = <button onClick={titleClick}>Title</button>;
  if (moduleState.titleVisible) display = boatButtons();

  return (
    <div>
      <h3>Boatrace</h3>
      {display}
    </div>
  );
}
