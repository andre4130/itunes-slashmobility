import React from 'react';
import './App.css';

//Components import
import UsersComponent from './components/example/UsersComponent';
import Searchbar from './components/searchbar/Searchbar';
import RecordCollection from './components/recordCollection/RecordCollection';

function App() {
  return (
    <div className="App">
      <Searchbar/>
      <RecordCollection/>
      <UsersComponent />
    </div>
  );
}

export default App;
