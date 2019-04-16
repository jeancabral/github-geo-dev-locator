import React, { Fragment } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../pages/main';
import SideBar from '../components/SideBar';
import GlobalStyle from '../styles/global';

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <GlobalStyle />
      <SideBar />
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
