import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchISSLocation } from '../actions';
import ISSContext from '../context/ISSContext';

import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

class ISSLocation extends Component {
  componentDidMount() {
    const { fetchApi } = this.context;

    this.timer = setInterval(
      fetchApi,
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {
      isFetching,
      latitude,
      longitude
    } = this.context;

    const isLocationPresent = latitude && longitude;
    return (
      <div>
        <div className="map">
          <Map
            center={[0, 0]}
            defaultWidth={700}
            height={450}
            minZoom={1}
            maxZoom={20}
            zoom={1}
          >
            {isLocationPresent && <Marker anchor={[latitude, longitude]} />}
          </Map>
        </div>
        {isFetching && 'Loading...'}
      </div>
    )
  }
}

ISSLocation.contextType = ISSContext;

export default ISSLocation;