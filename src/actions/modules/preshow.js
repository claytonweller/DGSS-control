export const preshowActionHash = {
  'preshow-answer': answerAction,
};

async function answerAction(params, component) {
  console.log('Answer', params);
  const prevState = component.state.moduleState;
  if (!prevState.attendees) prevState.attendees = {};

  const attendeeData = {
    name: params.interaction.attendee_name,
    lastQuestion: params.data.question,
    lastResponse: params.data.response,
    answerProgress: params.data.answered,
  };
  prevState.attendees[params.interaction.attendee_id] = attendeeData;
  component.setState({
    moduleState: {
      attendees: prevState.attendees,
    },
  });
}
