import React from 'react';
import './App.css';
import VideoGameList from './components/VideoGameList'
import Footer from './components/Footer'
import data from './data'


function App() {
  return (
    <div className="App">
      <h1>Best Selling Video Games</h1>
      <VideoGameList games={data} />
      <Footer title="Made By Turma 4 React Lovers"/>
    </div>
  );
}

export default App;
