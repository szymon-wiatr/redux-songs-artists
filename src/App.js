import React from 'react';
import Artists from './artists/components';
import PlayVideo from './video/containers/PlayVideo';
import './App.css';

const App = () => (
  <div className="App-header">
    <div className="ui container artists">
      <Artists />
      <PlayVideo />
    </div>
  </div>
);

export default App;
