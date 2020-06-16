import { updateModuleState } from './';

export const trollyActionHash = {
  'trolly-show-title': showTitleAction,
  'trolly-show-question': showQuestionsAction,
};

function showTitleAction(params, component) {
  updateModuleState(component, { step: 'title' });
}

function showQuestionsAction(params, component) {
  console.log('Template', params);
  updateModuleState(component, { ...params });
}
