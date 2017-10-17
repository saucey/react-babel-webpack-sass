import React from 'react';
import { Component } from 'react';
import Enter from '../enter/Enter'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// const websock =  new WebSocket('ws://localhost:8888/welcome');

export default class Users extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: props.username == 0 ? [] :[props.username]
    };
  }

  componentWillMount(props) {
  }

  componentWillUnmount() {
  }


  render() {
    return (
        <div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-sm-5">
                <h1>Active users</h1>
                {this.state.username.map((user, index) =>
                    <h1 key={index}>{user}</h1>
                )}
              </div>
            </div>
          </div>
        </div>
    );
  }
}