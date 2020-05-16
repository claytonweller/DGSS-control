export const boatraceActionHash = {
  'boatrace-show-title': showTitleAction,
  'boatrace-ready-to-board': readyToBoardAction,
};

function showTitleAction(params, component) {
  component.setState({
    moduleState: {
      step: 'title',
      audienceCount: component.state.attendeeCount,
    },
  });
}

function readyToBoardAction(params, component) {
  console.warn(params);
  component.setState({
    moduleState: {
      step: 'boarding',
      audienceCount: component.state.audienceCount,
    },
  });
}
