export const performanceActionHash = {
  'performance-created': performanceCreatedAction,
  'performance-ended': performanceEndedAction,
  'performance-joined': performanceJoinedAction
}

async function performanceJoinedAction(params, component) {
  if (params.attendee) {
    console.log(`${params.attendee.name} joined the audience`)
  } else if (params.currentConn.source === 'display') {
    console.log('Display Connected')
  }

}
async function performanceCreatedAction(params, component) {
  console.log('Performance Created \n', params)
  component.setState(params)
}

async function performanceEndedAction(parms, component) {
  console.log('Performance Ended')
  component.setState({ performance: {}, currentModule: { module: {}, instance: {} } })
}