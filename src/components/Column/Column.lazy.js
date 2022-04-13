import React, { lazy, Suspense } from 'react';

const LazyColumn = lazy(() => import('./Column'));

const Column = props => (
  <Suspense fallback={null}>
    <LazyColumn {...props} />
  </Suspense>
);

export default Column;
