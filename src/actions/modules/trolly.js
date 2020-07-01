import { updateModuleState } from './';

export const trollyActionHash = {
  'trolly-show-title': showTitleAction,
  'trolly-show-question': showQuestionsAction,
  'trolly-madness-begins': madnessBeginsAction,
  'trolly-madness-over': madnessOverAction,
};

function showTitleAction(params, component) {
  updateModuleState(component, { step: 'title' });
}

function showQuestionsAction(params, component) {
  updateModuleState(component, { ...params });
}

function madnessBeginsAction(params, component) {
  updateModuleState(component, { step: 'madness' });
}

function madnessOverAction(params, component) {
  updateModuleState(component, { ...params, madnessOver: true });
}
