import React, {useState} from 'react';
import './App.css';

// Components Import
import Searchbar from './components/searchbar/Searchbar';
import RecordCollection from './components/recordCollection/RecordCollection';
import Favourites from './components/favourites/Favourites'

function App() {


  return (
    <div className="App">
      <Searchbar/>
      <RecordCollection/>
      <Favourites/>
    </div>
  );
}

export default App;
