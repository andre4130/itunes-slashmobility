import React from 'react';
import './App.css';

import Searchbar from './components/searchbar/Searchbar';
import RecordCollection from './components/recordCollection/RecordCollection';

function App() {
  return (
    <div className="App">
      <Searchbar/>
      <RecordCollection/>
    </div>
  );
}

export default App;
