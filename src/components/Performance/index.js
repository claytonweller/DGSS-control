import React from 'react';
import { PerformanceCreator } from './PerformanceCreator';
import { PerformanceEnder } from './PerformanceEnder';
import { PerformanceConnector } from './PerformanceConnector';

export function Performance({ performance, currentConn, setPerformance, activePerformances }) {
  let display = <PerformanceCreator />;
  if (performance.id) {
    const perfData = JSON.stringify(performance);
    display = (
      <div>
        <PerformanceEnder performance={performance} />
        {perfData}
      </div>
    );
  }
  return (
    <div>
      {display}
      <PerformanceConnector
        connection={currentConn}
        activePerformances={activePerformances}
        setPerformance={(p) => setPerformance(p)}
        performance={performance}
      />
    </div>
  );
}
