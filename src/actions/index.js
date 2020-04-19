import { client } from '../index'

export const manageMessage = async (message, component) => {
  let action = Object.keys(actionHash).includes(message.action)
    ? actionHash[message.action]
    : actionHash.defaultAction

  try {
    return await action(message.params, component)
  } catch (e) {
    console.error(e)
  }
}

const actionHash = {
  'local-server': localServerAction,
  'conn-update': connectionUpdateAction,
  'performance-created': performanceCreatedAction,
  'performance-ended': performanceEndedAction,
  'performance-joined': performanceJoinedAction,
  defaultAction
}

async function defaultAction(params, component) { console.log('DEFAULT \n', params, component.state) }

async function performanceJoinedAction(params, component) {
  console.log(`${params.attendee.name} joined the audience`)
}

async function performanceCreatedAction(params, component) {
  console.log('Performance Created \n', params)
  component.setState({ performance: params })
}

async function performanceEndedAction(parms, component) {
  console.log('Performance Ended')
  component.setState({ performance: {} })
}

async function localServerAction(params, component) {
  console.log('local-server\n', params)
  const sendParams = {
    source: 'control'
  }
  client.send(JSON.stringify({ action: 'connect-source', params: sendParams }))
  component.setState({ currentConn: params })
}

async function connectionUpdateAction(params, component) {
  console.log('conn-update\n', params)
  component.setState({ currentConn: params.currentConnection })
}