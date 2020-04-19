import { client } from '../index'

export const utilityActionHash = {
  'local-server': localServerAction,
  'conn-update': connectionUpdateAction
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