import React, { Component, Fragment } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import './mapbox-gl.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SideBar from '../../components/SideBar';
import Modal from '../../components/Modal';

import { Creators as PinActions } from '../../store/ducks/pins';

class Main extends Component {
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
    window.addEventListener('resize', this.windowResize);
    this.windowResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowResize);
  }

  windowResize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = async (e) => {
    this.setState({ modalDisplay: true });
  };

  hideModal = async () => {
    this.setState({ modalDisplay: false });
  };

  render() {
    return (
      <Fragment>
        <SideBar />
        <Modal show={this.state.modalDisplay} handleClose={this.hideModal}>
          Adicicionar novo usuário
        </Modal>
        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiamVhbmNhYnJhbCIsImEiOiJjanVqdDZjdm8xbTB0NDRzMHFueWRuZmRsIn0.c-AF2EauuYJH0DCSQbJTrQ"
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {this.props.pins.data.map(pin => (
            <Marker
              key={pin.id}
              latitude={pin.latitude}
              longitude={pin.longitude}
              onClick={this.handleMapClick}
              captureClick
            >
              <img
                style={{
                  borderRadius: 100,
                  width: 48,
                  height: 48,
                }}
                src={pin.avatar_url}
              />
            </Marker>
          ))}
        </MapGL>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  pins: state.pins,
});
const mapDispatchToProps = dispatch => bindActionCreators(PinActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
