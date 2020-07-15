import React from 'react';

export function Boatrace({ moduleState, nextModule, sendAction }) {
  const boatButtons = () => {
    const possibleNumbers = [2, 3, 4, 5];
    const buttons = possibleNumbers.map((num) => {
      return (
        <div key={`boats-${num}`}>
          <div>BoatSize ~ {Math.floor(moduleState.audienceCount / num)}</div>
          <button onClick={() => sendAction('boatrace-create-boats', { boatCount: num })} value={num}>
            {num} Boats
          </button>
        </div>
      );
    });
    return buttons;
  };

  const boarding = () => {
    return (
      <div>
        <div>Boarding progress</div>
        <button onClick={() => sendAction('boatrace-select-cockswains')}>Pick Cockswains</button>
      </div>
    );
  };

  const meetYourCoxswain = () => {
    return (
      <div>
        <button onClick={() => sendAction('boatrace-start-naming-boats')}>Name Boats</button>
      </div>
    );
  };

  const openForNaming = () => {
    return (
      <div>
        <button onClick={() => sendAction('boatrace-stop-naming-boats')}>Stop Naming</button>
      </div>
    );
  };

  const namingClosed = () => {
    const boats = moduleState.boats.map((b) => {
      console.log(b);
      return (
        <div key={b.id}>
          <span>{b.name}</span>
          {b.state.nameIsVisible ? null : (
            <button onClick={() => sendAction('boatrace-reveal-boat-name', { revealedBoat: b })}>Reveal</button>
          )}
        </div>
      );
    });
    return (
      <div>
        <div>{boats}</div>
        <button onClick={() => sendAction('boatrace-next-instruction')}>Instructions</button>
      </div>
    );
  };

  const readyToRace = () => {
    const nextModuleButton = <button onClick={nextModule}>Next Module</button>;
    return (
      <div>
        <button onClick={() => sendAction('boatrace-start-race')}>START RACE!</button>
        {moduleState.raceComplete ? nextModuleButton : null}
      </div>
    );
  };

  const racing = () => {
    return <button onClick={() => sendAction('boatrace-end-race')}>END RACE!</button>;
  };

  let display = <button onClick={() => sendAction('boatrace-title')}>Title</button>;
  if (moduleState.step === 'title') display = boatButtons();
  if (moduleState.step === 'boarding') display = boarding();
  if (moduleState.step === 'meet-your-coxswain') display = meetYourCoxswain();
  if (moduleState.step === 'open-for-naming') display = openForNaming();
  if (moduleState.step === 'naming-closed') display = namingClosed();
  if (moduleState.step === 'ready-to-race') display = readyToRace();
  if (moduleState.step === 'racing') display = racing();

  return (
    <div>
      <h3>Boatrace</h3>
      {display}
    </div>
  );
}
