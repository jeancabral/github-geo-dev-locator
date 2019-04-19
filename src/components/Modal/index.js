import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from './styles';

import { Creators as PinActions } from '../../store/ducks/pins';

class Modal extends Component {
  state = {
    repositoryInput: '',
  };

  handleAddRepository = (e) => {
    e.preventDefault();

    this.props.addPinRequest({
      user: this.state.repositoryInput,
      viewport: this.props.coordinates,
    });

    this.setState({ repositoryInput: '' });

    this.props.handleClose();
  };

  render() {
    return (
      <Container modalDisplay={this.props.show}>
        <div className="modal-main">
          <h3>{this.props.children}</h3>
          <form onSubmit={this.handleAddRepository}>
            <input
              placeholder="Usuário no Github"
              value={this.state.repositoryInput}
              onChange={e => this.setState({ repositoryInput: e.target.value })}
            />
            <div className="actions-buttons">
              <button className="cancel" type="button" onClick={this.props.handleClose}>
                Cancelar
              </button>
              <button type="submit" className="save" onClick={() => false}>
                Salvar
              </button>
            </div>
            {' '}
          </form>
        </div>
      </Container>
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
)(Modal);
