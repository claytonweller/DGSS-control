import React from 'react';

export const CurrentAudience = (props) => {
  const createAttendeeComponents = () => {
    const { attendees } = props;
    if (attendees) {
      return Object.keys(attendees).map((id, i) => {
        const attendee = attendees[id];
        return (
          <div key={`attendee-${i}`}>
            <div>
              <span>{`${i + 1}. ${attendee.name}`}</span>
              <span>
                <div>{`core: ${calculateProgress(attendee.answerProgress.core)}%`}</div>
                <div>{`trivial: ${calculateProgress(attendee.answerProgress.trivial)}%`}</div>
              </span>
            </div>
            <div>Last question: {attendee.lastQuestion.text}</div>
            <div>Last response: {attendee.lastResponse}</div>
          </div>
        );
      });
    }
    return <div>No Audience Yet</div>;
  };

  const calculateProgress = (arr) => {
    const numerator = arr.reduce((p, c) => {
      if (c) p += 1;
      return p;
    }, 0);
    const denominator = arr.length;
    const ratio = numerator / denominator;
    return Math.ceil(ratio * 100);
  };

  return (
    <div>
      <h4>Current Audience</h4>
      {createAttendeeComponents()}
    </div>
  );
};
