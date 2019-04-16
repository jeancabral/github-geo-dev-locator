import React, { Component, Fragment } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import './mapbox-gl.css';
import Modal from '../../components/Modal';

export default class Main extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -10.9187232,
      longitude: -37.0467422,
      zoom: 14,
    },
    modalDisplay: false,
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = async (e) => {
    const [longitude, latitude] = e.lngLat;

    console.log(e.lngLat);

    console.log(`Latitude: ${latitude} \nLongitude: ${longitude}`);
    this.setState({ modalDisplay: true });
  };

  render() {
    return (
      <Fragment>
        <Modal show={this.state.modalDisplay}>Adicicionar novo usuário</Modal>
        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiamVhbmNhYnJhbCIsImEiOiJjanVqdDZjdm8xbTB0NDRzMHFueWRuZmRsIn0.c-AF2EauuYJH0DCSQbJTrQ"
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <Marker
            latitude={-10.9187232}
            longitude={-37.0467422}
            onClick={this.handleMapClick}
            captureClick
          >
            <img
              style={{
                borderRadius: 100,
                width: 48,
                height: 48,
              }}
              src="https://avatars1.githubusercontent.com/u/2077886?s=460&v=4"
            />
          </Marker>
        </MapGL>
      </Fragment>
    );
  }
}
