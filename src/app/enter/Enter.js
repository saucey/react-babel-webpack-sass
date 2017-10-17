import React from 'react';
import { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Redirect} from 'react-router-dom'
// const websock =  new WebSocket('ws://localhost:8888/welcome');

export default class Enter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name:'',
      value: '',
      message: [],
      modal: false,
      enter: false
    };

    // this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:8888/welcome')
    this.socket.onopen = () => this.onSocketOpen()
    this.socket.onmessage = (m) => this.onSocketData(m)
    this.socket.onclose = (c) => this.onSocketClose(c)
  }

  onSocketOpen(){}

  onSocketClose(close){
    console.log(close)
  }

  onSocketData(message) {
    console.log(message, 'the data');
    // this.setState({message: [...this.state.message, message.data]})
  }

  onChange () {
    const value = this.input.value
    this.setState( state => ({
      value,
    }))
  }
  
  onCloseConn(e){
    this.socket.close(e);
  }
  
  onSubmit (e) {
    e.preventDefault()
    this.setState({name: this.state.value});

    this.socket.send(JSON.stringify({
      name: this.state.value,
    }));

    // this.props.addUser(this.state.value)
    this.props.onEnter(true)

  }

  render() {
    return (
        <div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-sm-5">
                <button onClick={() => (this.onCloseConn())} className="btn-danger btn">Close</button>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    {/*<label htmlFor="exampleInputEmail1">Enter Name:</label>*/}
                    <input autoFocus onChange={this.onChange} ref={ elm => { this.input = elm } } className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name"/>
                    <small id="emailHelp" className="form-text text-muted">Enter a name you would like to describe yourself as to the other users!</small>
                  </div>
                  <button type="submit" className="enter-btn btn btn-outline-primary">ENTER</button>
                  {this.state.message.map((user, index) =>
                      <h1 key={index}>{user}</h1>
                  )}
                </form>
                {/*{this.props.enter && (*/}
                {/*<Redirect to={'/users'}/>*/}
                {/*)}*/}
              </div>
            </div>
          </div>
        </div>
    );
  }
}