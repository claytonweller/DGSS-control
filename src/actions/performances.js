export const performanceActionHash = {
  'performance-created': performanceCreatedAction,
  'performance-ended': performanceEndedAction,
  'performance-joined': performanceJoinedAction
}

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