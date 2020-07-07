import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchISSLocation } from '../actions';

import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

class ISSLocation extends Component {
  componentDidMount() {
    const { getCurrentISSLocation } = this.props;

    this.timer = setInterval(
      getCurrentISSLocation,
      50
    );
  }

  componentWillMount() {
    clearInterval(this.timer);
  }

  render() {
    const {
      isFetching,
      latitude,
      longitude
    } = this.props;

    const isLocationPresent = latitude && longitude;

    return (
      <div>
        <div className="map">
          <Map
            center={[0, 0]}
            defaultWidth={700}
            height={450}
            minZoom={1}
            maxZoom={8}
            zoom={1}
          >
            {isLocationPresent && <Marker anchor={[latitude, longitude]} />}
          </Map>
        </div>
        {/* {isFetching && 'Loading...'} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    isFetching: state.issLocation.isFetching,
    latitude: state.issLocation.latitude,
    longitude: state.issLocation.longitude,
  }
);

const mapDispatchToProps = (dispatch) => ({
  getCurrentISSLocation: () => dispatch(fetchISSLocation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);