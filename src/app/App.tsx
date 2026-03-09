import { AppRouter } from './providers/router/ui/AppRouter';
import { Suspense } from 'react';

function App() {
  return (
    <>
      <Suspense fallback={<></>}>
        <AppRouter />
      </Suspense>
    </>
  );
}

export default App;
