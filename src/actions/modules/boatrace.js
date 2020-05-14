export const boatraceActionHash = {
  'boatrace-show-title': showTitleAction,
};

function showTitleAction(params, component) {
  console.log('Template', params);
  console.warn(component.state);

  component.setState({
    moduleState: {
      titleVisible: true,
      audienceCount: component.state.attendeeCount,
    },
  });
}
