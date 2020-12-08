import React from 'react';
import './App.css';

//Components import
import UsersComponent from './components/example/UsersComponent';
import Searchbar from './components/searchbar/Searchbar'

function App() {
  return (
    <div className="App">
      <Searchbar/>
      <UsersComponent />
    </div>
  );
}

export default App;
