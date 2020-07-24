import { updateModuleState } from '.';

export const tttActionHash = {
  'ttt-teams-created': teamsCreatedAction,
};

function teamsCreatedAction(params, component) {
  updateModuleState(component, { step: 'lobby', params });
}
