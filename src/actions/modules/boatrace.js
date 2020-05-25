export const boatraceActionHash = {
  'boatrace-show-title': showTitleAction,
  'boatrace-ready-to-board': readyToBoardAction,
  'boatrace-boat-boarded': boatBoardedAction,
  'boatrace-coxswains-selected': coxswainsSelectedAction,
  'boatrace-open-for-naming': openForNamingAction,
  'boatrace-boat-named': boatNamedAction,
  'boatrace-naming-closed': closeNamingAction,
  'boatrace-display-boat-name': displayBoatNameAction,
  'boatrace-instructions-completed': instructionsCompletedAction,
  'boatrace-race-started': raceStartedAction,
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

function coxswainsSelectedAction(params, component) {
  component.setState({
    moduleState: {
      ...component.state.moduleState,
      step: 'meet-your-coxswain',
      ...params,
    },
  });
}

function openForNamingAction(params, component) {
  component.setState({
    moduleState: {
      ...component.state.moduleState,
      step: 'open-for-naming',
    },
  });
}

function boatNamedAction(params, component) {
  const boats = component.state.moduleState.boats.map((b) => {
    if (b.id === params.boat.id) {
      return params.boat;
    }
    return b;
  });

  component.setState({
    moduleState: {
      ...component.state.moduleState,
      boats,
    },
  });
}

function closeNamingAction(params, component) {
  component.setState({
    moduleState: {
      ...component.state.moduleState,
      boats: params.boats,
      step: 'naming-closed',
    },
  });
}

function displayBoatNameAction(params, component) {
  const boats = component.state.moduleState.boats.map((b) => {
    if (b.id === params.boat.id) {
      return params.boat;
    }
    return b;
  });

  component.setState({
    moduleState: {
      ...component.state.moduleState,
      boats,
    },
  });
}

function instructionsCompletedAction(params, component) {
  component.setState({
    moduleState: {
      ...component.state.moduleState,
      step: 'ready-to-race',
    },
  });
}

function raceStartedAction(params, component) {
  component.setState({
    moduleState: {
      ...component.state.moduleState,
      step: 'racing',
      boats: params.boats,
    },
  });
}
