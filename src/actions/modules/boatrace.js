export const boatraceActionHash = {
  'boatrace-show-title': showTitleAction,
  'boatrace-ready-to-board': readyToBoardAction,
  'boatrace-boat-boarded': boatBoardedAction,
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
  component.setState({
    moduleState: {
      step: 'boarding',
      audienceCount: component.state.audienceCount,
    },
  });
}

function boatBoardedAction(params, component) {
  // TODO I may find some utility later
  // Currently we're recieving the Team/Boat info for the boat boarded so we could
  // Extrapolate the number of people in a given boat this way.
}
