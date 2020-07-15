import { updateModuleState } from './';

export const boatraceActionHash = {
  'boatrace-show-title': showTitleAction,
  'boatrace-ready-to-board': readyToBoardAction,
  'boatrace-coxswains-selected': coxswainsSelectedAction,
  'boatrace-open-for-naming': openForNamingAction,
  'boatrace-boat-named': boatNamedAction,
  'boatrace-naming-closed': closeNamingAction,
  'boatrace-display-boat-name': displayBoatNameAction,
  'boatrace-instructions-completed': instructionsCompletedAction,
  'boatrace-race-started': raceStartedAction,
  'boatrace-race-ended': raceEndedAction,
};

function showTitleAction(params, component) {
  updateModuleState(component, {
    step: 'title',
    audienceCount: component.state.attendeeCount,
  });
}

function readyToBoardAction(params, component) {
  updateModuleState(component, {
    step: 'boarding',
    audienceCount: component.state.audienceCount,
  });
}

function coxswainsSelectedAction(params, component) {
  updateModuleState(component, {
    step: 'meet-your-coxswain',
    ...params,
  });
}

function openForNamingAction(params, component) {
  updateModuleState(component, { step: 'open-for-naming' });
}

function boatNamedAction(params, component) {
  const boats = updateSpecificBoat(component, params);
  updateModuleState(component, { boats });
}

function closeNamingAction(params, component) {
  updateModuleState(component, {
    boats: params.boats,
    step: 'naming-closed',
  });
}

function displayBoatNameAction(params, component) {
  const boats = updateSpecificBoat(component, params);
  updateModuleState(component, { boats });
}

function instructionsCompletedAction(params, component) {
  updateModuleState(component, { step: 'ready-to-race' });
}

function raceStartedAction(params, component) {
  updateModuleState(component, {
    boats: params.boats,
    step: 'racing',
  });
}

function raceEndedAction(params, component) {
  updateModuleState(component, { step: 'ready-to-race', raceComplete: true });
}
///

function updateSpecificBoat(component, params) {
  return component.state.moduleState.boats.map((b) => {
    if (b.id === params.boat.id) {
      return params.boat;
    }
    return b;
  });
}
