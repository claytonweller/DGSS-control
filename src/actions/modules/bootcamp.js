export const bootcampActionHash = {
  'bootcamp-test-started': testStartedAction,
  'bootcamp-test-ended': testEndedAction,
};

function testStartedAction(params, component) {
  console.log('Test Started', params);
  component.setState({ moduleState: { testing: true } });
}

function testEndedAction(params, component) {
  console.log('Test Ended', params);
  component.setState({ moduleState: { testing: false } });
}
