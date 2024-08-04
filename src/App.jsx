import React, { Suspense } from 'react';
const MusicPlayer = React.lazy(() => import('./components/MusicPlayer/MusicPlayer'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MusicPlayer />
    </Suspense>
  );
}

export default App;
