import React from 'react';
import { Problem } from './Problem';
import { Madness } from './Madness';

export function Trolly({ moduleState, sendAction, nextModule }) {
  const questionClick = (defaultText, altText, timer) => {
    console.log('q', defaultText, altText);
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

  let display = <Problem moduleState={moduleState} sendAction={sendAction} questionClick={questionClick} />;
  if (moduleState.step === 'madness') {
    display = (
      <Madness
        moduleState={moduleState}
        sendAction={sendAction}
        questionClick={questionClick}
        nextModule={nextModule}
      />
    );
  }

  return (
    <div>
      <h3>Trolly</h3>
      {display}
    </div>
  );
}
