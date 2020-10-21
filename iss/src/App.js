import React, { Component } from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';
import ISSContext from './context/ISSContext';
import { getCurrentISSLocation } from './services/issAPI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      latitude: null,
      longitude: null,
    }

    this.fetchApi = this.fetchApi.bind(this);
    this.handleSuccessApi = this.handleSuccessApi.bind(this)
  }

  fetchApi() {
    const { isFetching } = this.state;

    if (isFetching) return null;

    this.setState({ isFetching: true })

    getCurrentISSLocation().then(this.handleSuccessApi);
  }

  handleSuccessApi(response) {
    const { iss_position: { latitude, longitude } } = response;
    this.setState({
      isFetching: false,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    });
  }

  render() {
    const contextValue = {
      fetchApi: this.fetchApi,
      isFetching: this.state.isFetching,
      latitude: this.state.latitude,
      longitude: this.state.longitude
    }

    return (
      <ISSContext.Provider value={contextValue}>
        <div className="App">
          <h1>International Space Station Location Tracker</h1>
          <ISSLocation />
        </div>
      </ISSContext.Provider>
    );
  }
}

export default App;
