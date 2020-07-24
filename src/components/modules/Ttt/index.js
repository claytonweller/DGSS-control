import React from 'react';

export function Ttt({ moduleState, sendAction, nextModule }) {
  let display = (
    <div>
      <button onClick={() => sendAction('ttt-grid')}>Grid</button>
      <button onClick={() => sendAction('ttt-title')}>Title</button>
      <button onClick={() => sendAction('ttt-teams')}>Teams</button>
    </div>
  );

  if (moduleState.step === 'lobby')
    display = (
      <div>
        <button onClick={() => sendAction('ttt-start-game', { height: 3, width: 3 })}>3x3</button>
        <button onClick={() => sendAction('ttt-start-game', { height: 10, width: 10 })}>10x10</button>
        <button onClick={() => nextModule()}>nextModule</button>
      </div>
    );

  return <div>{display}</div>;
}
