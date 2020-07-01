import React from 'react';

export function Problem({ moduleState, sendAction, questionClick }) {
  const currentQuestion = () => {
    const { currentQuestion: q } = moduleState;
    if (q) {
      const question = q.default.text + ' or ' + q.alternative.text + '?';
      return <div>{question}</div>;
    }
  };

  let display = <button onClick={() => sendAction('trolly-title')}>Title</button>;

  const examples = () => {
    return (
      <div>
        <div>
          <button onClick={() => questionClick('5 people', '1 person', 999999)}>1 Basic</button>
          <button onClick={() => questionClick('5 people', 'Snipe Trolly driver', 999999)}>2 Sniper</button>
          <button onClick={() => questionClick('5 people', 'Shove person in front of Trolly', 999999)}>3 Shove</button>
          <button onClick={() => questionClick('1 baby', '1 adult', 5000)}>4 Timer</button>
        </div>
        <div>
          <button onClick={() => sendAction('trolly-madness')}>Madness</button>
        </div>
      </div>
    );
  };

  if (moduleState.step === 'title') display = examples();

  return (
    <div>
      {currentQuestion()}
      {display}
    </div>
  );
}
