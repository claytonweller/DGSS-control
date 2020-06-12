import React from 'react';
import { Trolly } from './Trolly/';
import { Boatrace } from './Boatrace/';
import { Preshow } from './Preshow/';
import { Bootcamp } from './Bootcamp/';
import { ModulePicker } from './ModulePicker';
import { client } from '../../';

export function Module({ currentModule, currentConn, moduleState }) {
  const nextModule = () => {
    const payload = JSON.stringify({
      action: 'determine-next-module',
      params: {
        currentModule,
      },
    });
    client.send(payload);
  };

  const sendAction = (actionName, additionalParams) => {
    client.send(
      JSON.stringify({
        action: actionName,
        params: {
          performance_id: currentConn.performance_id,
          currentModule,
          ...additionalParams,
        },
      })
    );
  };

  const moduleHash = {
    trolly: <Trolly moduleState={moduleState} sendAction={sendAction} />,
    boatrace: <Boatrace moduleState={moduleState} nextModule={nextModule} sendAction={sendAction} />,
    bootcamp: <Bootcamp currentConn={currentConn} nextModule={nextModule} moduleState={moduleState} />,
    preshow: <Preshow nextModule={nextModule} moduleState={moduleState} />,
    // TODO default will need some functionality at some point. To allow us to get into a module.
    default: <div>Default</div>,
  };

  const currentModuleTitle = currentModule.module.title;
  const moduleInterface =
    currentModuleTitle && Object.keys(moduleHash).includes(currentModuleTitle)
      ? moduleHash[currentModuleTitle]
      : moduleHash.default;

  return (
    <div>
      <div>{moduleInterface}</div>
      <div>
        <ModulePicker moduleTitles={Object.keys(moduleHash)} currentModule={currentModule} />
      </div>
    </div>
  );
}
