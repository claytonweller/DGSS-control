import { performanceActionHash } from './performances';
import { utilityActionHash } from './utility';
import { moduleActionHash } from './modules';

export const manageMessage = async (message, component) => {
  console.log('Action: ', message.action);
  console.warn('TEEEEEST --------', message);

  const action = Object.keys(actionHash).includes(message.action)
    ? actionHash[message.action]
    : actionHash.defaultAction;

  try {
    return await action(message.params, component);
  } catch (e) {
    console.error(e);
  }
};

const actionHash = {
  ...performanceActionHash,
  ...utilityActionHash,
  ...moduleActionHash,
  defaultAction,
};

async function defaultAction(params, component) {
  console.log('DEFAULT \n', params, component.state);
}
