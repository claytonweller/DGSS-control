import React from 'react';
import { client } from '../../..';

export function Boatrace({ moduleState, currentModule }) {
  const titleClick = () => {
    client.send(JSON.stringify({ action: 'boatrace-title', params: {} }));
  };

  const boatButtons = () => {
    // TODO eventually the available numbers will be determined by the number of attendees
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

  const boatSizeClick = (num) => {
    client.send(JSON.stringify({ action: 'boatrace-create-boats', params: { boatCount: num, currentModule } }));
  };

  const boarding = () => {
    return (
      <div>
        <div>Boarding progress</div>
        <button onClick={selectCoxswains}>Pick Cockswains</button>
      </div>
    );
  };

  const selectCoxswains = () => {
    client.send(JSON.stringify({ action: 'boatrace-select-cockswains', params: { currentModule } }));
  };

  let display = <button onClick={titleClick}>Title</button>;
  if (moduleState.step === 'title') display = boatButtons();
  if (moduleState.step === 'boarding') display = boarding();

  return (
    <div>
      <h3>Boatrace</h3>
      {display}
    </div>
  );
}
