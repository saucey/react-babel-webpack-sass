import React from 'react'
// import { browserHistory, Switch, Route } from 'react-router-dom'
import  { browserHistory, withRouter, Redirect }  from "react-router";

const mw = store => next => action => {

  if(action.type == 'ON_ENTER') {
    // browserHistory.push('/users')
    // browserHistory.replace({pathname: '/'});
    next(action)
  };

  next(action)

}

export default mw