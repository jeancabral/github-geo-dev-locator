import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { Container } from './styles';
import Users from '../Users';

export default class SideBar extends Component {
  //   static propTypes = {
  //     prop: PropTypes,
  //   };

  render() {
    return (
      <Container>
        <Users />
      </Container>
    );
  }
}
