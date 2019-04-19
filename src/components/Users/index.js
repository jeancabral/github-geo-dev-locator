import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Profile } from './styles';

import { Creators as PinActions } from '../../store/ducks/pins';

class Users extends Component {
  handleDelRepository = (id) => {
    this.props.delPinRequest(id);
  };

  render() {
    return (
      <Fragment>
        {this.props.pins.data.map(pin => (
          <Profile key={pin.id}>
            <div className="user-detail">
              <img src={pin.avatar_url} />
              <ul>
                <li>{pin.name}</li>
                <li>
                  <small>{pin.login}</small>
                </li>
              </ul>
            </div>
            <div className="actions-buttons">
              <button type="button" onClick={() => this.handleDelRepository(pin.id)}>
                <i className="fa fa-times-circle" />
              </button>
              <button type="button" onClick={() => false}>
                <i className="fa fa-chevron-right" />
              </button>
            </div>
          </Profile>
        ))}
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
)(Users);
