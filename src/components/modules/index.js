import React from 'react';
import { Preshow } from './Preshow/';
import { Bootcamp } from './Bootcamp/';
import { client } from '../../';

export function Module({ currentModule, moduleState }) {
  const nextModule = () => {
    const payload = JSON.stringify({
      action: 'determine-next-module',
      params: {
        currentModule,
      },
    });
    client.send(payload);
  };

  const moduleHash = {
    bootcamp: <Bootcamp />,
    preshow: <Preshow nextModule={() => nextModule()} moduleState={moduleState} />,
    // TODO default will need some functionality at some point. To allow us to get into a module.
    default: <div>Default</div>,
  };

  const currentModuleTitle = currentModule.module.title;
  const moduleInterface =
    currentModuleTitle && Object.keys(moduleHash).includes(currentModuleTitle)
      ? moduleHash[currentModuleTitle]
      : moduleHash.default;

  return moduleInterface;
}
