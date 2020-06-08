import React from 'react';
import Cofre from './components/Cofre'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <Cofre correctPassword="1234">
            <img
              src="https://f.jwwb.nl/public/s/c/w/temp-mozdoqoyjvjdwsgkkoxn/treasure_chest_312572-2.jpg"
              alt="My awesome chest filled with gold"
            />
          </Cofre>
        </header>
      </div>
    );
  }
}

export default App;
