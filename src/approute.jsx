/**
 * Created by leoscott on 25/05/2017.
 */
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Main from './app/layout/MainLayout'
import Enter from './app/enter/EnterContainer'
import Users from './app/users/UsersContainer'
import React, { Component }  from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'

class appRoute extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
        <div>

          <Enter/>
        </div>


    )
  }
}

export default withRouter(connect()(appRoute))

