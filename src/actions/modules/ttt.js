import { updateModuleState } from '.';

export const tttActionHash = {
  'ttt-teams-created': teamsCreatedAction,
  'ttt-game-updated': gameUpdatedAction,
};

function teamsCreatedAction(params, component) {
  updateModuleState(component, { step: 'lobby', ...params });
}

function gameUpdatedAction(params, component) {
  updateModuleState(component, { step: 'in-progress', ...params });
}
