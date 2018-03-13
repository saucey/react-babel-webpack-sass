  import React from 'react';
  import { Component } from 'react';
  import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
  import { Redirect} from 'react-router-dom'
  
  export default class Cards extends Component {
  
    constructor(props) {
  
      super(props);
      this.state = {};

      console.log(this.props, 'the props');

    }
      
    componentDidMount() {
      this.websocket = new WebSocket("ws://localhost:9999/");

      this.websocket.addEventListener('open', () => {
        this.websocket.send(JSON.stringify({ action: 'add', username: this.props.name }));
      });
  
      this.setState({ user: this.props.name })
      this.websocket.onmessage = (evt) => this.onSocketData(evt)
    }
  
    shouldComponentUpdate(nextProps, nextState) {
  
    }

    onSocketData(evt) {
  
      const data = JSON.parse(evt.data);

      if (data) {
        switch (data.messageType) {

          case 'enterGame':

            console.log('entered the game!!!');

            break;

          case 'move':
          
            break;  

        }
      }
    }

    // ModalTest(){
    //   return (
    //     <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
    //       <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
    //       <ModalBody>
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    //       </ModalBody>
    //       <ModalFooter>
    //         <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
    //         <Button color="secondary" onClick={this.toggle}>Cancel</Button>
    //       </ModalFooter>
    //     </Modal>
    //   );
    // }

  
  
    render() {
  
      return(
          <div className="container">
            <h1>The game page</h1>
          </div>
      )
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
