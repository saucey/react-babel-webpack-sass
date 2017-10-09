import React from 'react';
import { Component } from 'react';

// const websock =  new WebSocket('ws://localhost:8888/welcome');

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name:'',
      value: '',
      message: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

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
        <form onSubmit={this.onSubmit}>

          <input
              ref={ elm => { this.input = elm } }
              onChange={this.onChange}
              autoFocus />

          <button> OK </button>

          <h1>Welcome: {this.state.name}</h1>
          <h2>{this.state.message}</h2>

        </form>
    );
  }
}