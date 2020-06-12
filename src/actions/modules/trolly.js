import { updateModuleState } from './';

export const trollyActionHash = {
  'trolly-show-title': showTitleAction,
};

function showTitleAction(params, component) {
  console.log('Template', params);
  updateModuleState(component, { step: 'title' });
}
