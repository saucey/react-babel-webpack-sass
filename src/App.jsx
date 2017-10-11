import React from 'react';
import { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// const websock =  new WebSocket('ws://localhost:8888/welcome');

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name:'',
      value: '',
      message: '',
      modal: false
    };

    this.toggle = this.toggle.bind(this);

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:8888/welcome')
    this.socket.onopen = () => this.onSocketOpen()
    this.socket.onmessage = (m) => this.onSocketData(m)
    this.socket.onclose = () => this.onSocketClose()
  }

  onSocketOpen(){}

  onSocketClose(){}

  onSocketData(message) {
    this.setState({message: message.data})
  }

  onChange () {
    const value = this.input.value
    this.setState( state => ({
      value,
    }))
  }

  onSubmit (e) {
    e.preventDefault()
    this.setState({name: this.state.value});
    // setTimeout(function(){
    this.socket.send(JSON.stringify({
      name: this.state.value,
    }));
  }

  render() {
    return (
        <div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-sm-5">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    {/*<label htmlFor="exampleInputEmail1">Enter Name:</label>*/}
                    <input autoFocus onChange={this.onChange} ref={ elm => { this.input = elm } } className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name"/>
                    <small id="emailHelp" className="form-text text-muted">Enter a name you would like to describe yourself as to the other users!</small>
                  </div>
                  <button type="submit" className="enter-btn btn btn-outline-primary">ENTER</button>
                  {/*<h1>Welcome: {this.state.name}</h1>*/}
                  <h2>{this.state.message}</h2>
                </form>
              </div>
            </div>
          </div>

          <div>
            {/*<Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>*/}
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
    );
  }
}