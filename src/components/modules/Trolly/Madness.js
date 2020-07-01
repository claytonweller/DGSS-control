import React from 'react';

export function Madness({ moduleState, sendAction, questionClick, nextModule }) {
  const { pastQuestions, madnessOver } = moduleState;

  const questionDisplay = pastQuestions.map((q, i) => {
    const defaultText = q.default.text;
    const altText = q.alternative.text;
    const question = defaultText.slice(0, 10) + '... / ' + altText.slice(0, 10) + '...';
    const questionButtonClick = madnessOver ? questionClick : console.log;
    return (
      <div key={'question' + i}>
        {question}
        <button onClick={() => questionButtonClick(defaultText, altText)}>view</button>
      </div>
    );
  });

  const forceFinishButton = <button onClick={() => sendAction('trolly-end-madness')}>Force Finish</button>;
  const zoomOutButton = <button onClick={() => sendAction('trolly-grid')}>Zoom Out</button>;
  const nextModuleButton = <button onClick={nextModule}>nextModule</button>;

  return (
    <div>
      <h3>Madness</h3>
      <div>{questionDisplay}</div>
      {madnessOver ? null : forceFinishButton}
      {madnessOver ? zoomOutButton : null}
      {madnessOver ? nextModuleButton : null}
    </div>
  );
}
