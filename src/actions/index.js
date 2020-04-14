import { client } from '../index'

export const manageMessage = async (message, component) => {
  let action = Object.keys(actionHash).includes(message.action)
    ? actionHash.defaultAction
    : actionHash[message.action]

  try {
    return await action(message.params, component)
  } catch (e) {
    console.error(e)
  }
}

const actionHash = {
  'local-server': localServer,
  'conn-update': connectionUpdate,
  defaultAction
}

async function defaultAction(params, component) { console.log('DEFAULT \n', params, component.state) }

async function localServer(params, component) {
  console.log('local-server\n', params)
  const sendParams = {
    source: 'control'
  }
  client.send(JSON.stringify({ action: 'connect-source', params: sendParams }))
  component.setState({ currentConn: params })
}

async function connectionUpdate(params, component) {
  console.log('conn-update\n', params)
  component.setState({ currentConn: params })
}