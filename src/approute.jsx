/**
 * Created by leoscott on 25/05/2017.
 */
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Main from './app/layout/MainLayout'
import Enter from './app/enter/EnterContainer'
import Cards from './app/cards/CardsContainer'
import Users from './app/users/UsersContainer'
import React, { Component }  from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'

const routes = [
  {
    exact: true,
    path: '/',
    component: Enter,
    // layout: Empty,
  }, {
    path: '/lobby',
    component: Cards,
    // layout: Main,
  },
];

class appRoute extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
        <div>
          <Switch>
            {routes.map(route => (
                <Route path={route.path} key={route.path} exact={route.exact}>
                    <route.component />
                </Route>
            ))}
          </Switch>
        </div>
    )
  }
}

export default withRouter(connect()(appRoute))

