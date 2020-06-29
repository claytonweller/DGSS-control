import React from 'react';

export function Madness({ moduleState, sendAction, questionClick }) {
  const { pastQuestions, canClick } = moduleState;

  const questionDisplay = pastQuestions.map((q, i) => {
    console.log(q);
    const defaultText = q.default.text;
    const altText = q.alternative.text;
    const question = defaultText.slice(0, 10) + '... / ' + altText.slice(0, 10) + '...';
    const questionButtonClick = canClick ? questionClick : console.log;
    return (
      <div key={'question' + i}>
        {question}
        <button onClick={() => questionButtonClick(defaultText, altText)}>view</button>
      </div>
    );
  });

  const forceFinish = <button onClick={() => sendAction('trolly-end-madness')}>Force Finish</button>;
  return (
    <div>
      <h3>Madness</h3>
      <div>{questionDisplay}</div>
      {forceFinish}
    </div>
  );
}
