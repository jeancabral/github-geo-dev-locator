import React, { Component, Fragment } from 'react';

import { Profile } from './styles';

export default class Users extends Component {
  render() {
    return (
      <Fragment>
        <Profile>
          <img src="https://avatars1.githubusercontent.com/u/2077886?s=460&v=4" />
          <ul>
            <li>Jean Cabral</li>
            <li>
              <small>jeancabral</small>
            </li>
          </ul>
          <div className="buttons-container">
            <button type="button" onClick={() => false}>
              <i className="fa fa-times-circle" />
            </button>
            <button type="button" onClick={() => false}>
              <i className="fa fa-chevron-right" />
            </button>
          </div>
        </Profile>
      </Fragment>
    );
  }
}
