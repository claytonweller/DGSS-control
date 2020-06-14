import React from 'react';

export function Trolly({ moduleState, sendAction }) {
  let display = <button onClick={() => sendAction('trolly-title')}>Title</button>;

  const questionClick = (defaultText, altText, timer) => {
    const params = {
      options: {
        question: {
          default: { text: defaultText },
          alternative: { text: altText },
        },
        timer,
      },
    };

    sendAction('trolly-question', params);
  };

  const examples = () => {
    return (
      <div>
        <div>
          <button onClick={() => questionClick('5 people', '1 person', 999999)}>1 Basic</button>
          <button onClick={() => questionClick('5 people', 'Snipe Trolly driver', 999999)}>2 Sniper</button>
          <button onClick={() => questionClick('5 people', 'Shove person in front of Trolly', 999999)}>3 Shove</button>
          <button onClick={() => questionClick('1 baby', '1 adult', 7750)}>4 Timer</button>
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
      <h3>Trolly</h3>
      {display}
    </div>
  );
}
