  import React from 'react';
  import { Component } from 'react';
  import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
  import { Redirect} from 'react-router-dom'
  
  export default class Cards extends Component {
  
    constructor(props) {
  
      super(props);
  
      this.state = {
        clickcount: 1,
        users: [],
        user: '',
        from: '',
        redirecttohome: false,
        redirectToGame: false,
        modal: false
      };
  
      this.handleClick = this.handleClick.bind(this);
      this.logOutAll = this.logOutAll.bind(this);
      this.selectUser = this.selectUser.bind(this);
      this.toggle = this.toggle.bind(this);
      this.agreedToChallenge = this.agreedToChallenge.bind(this);
  
    }

    agreedToChallenge() {

      this.toggle(); 

      this.setState({
        redirectToGame: true
      });

      this.websocket.send(JSON.stringify({ action: 'addRoom', room: 'TheGamesRoom1', username: this.props.name, from:this.state.from }));

    }
  
    handleClick(name) {
  
      this.setState({
        clickCount: this.state.clickCount + 1
      });
  
      this.props.cardSelected(name, this.state.clickCount);
    }
  
    logOutAll() {
  
      $.getJSON('http://localhost:5000/log-out-all');
  
      this.setState({ redirectToHome: true })
  
    }

    selectUser(user) {

      $.getJSON('http://localhost:5000/selected-user', { username: user, from: this.props.name });

    }

   toggle() {
      this.setState({
        modal: !this.state.modal
      });
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
  
      let params = { deck: nextProps.cards, username: this.props.name };
  
      if(nextProps.cards.length !== this.props.cards.length) {
        this.sendNewDeck(params)
      }
  
      return true;
    }
  
    sendNewDeck(params) {
      $.getJSON('http://localhost:5000/send-move', params);
    }
  
    onSocketData(evt) {
  
      const data = JSON.parse(evt.data);

      console.log(data, 'data form who!!!');
  
      if (data) {
        switch (data.messageType) {

          case 'enterGame':

            this.setState({
              redirectToGame: true
            });

            break;

          case 'selectedUser':

            this.setState({
              modal: !this.state.modal,
              from: data.from
            });

            break;

          case 'test':
            // this.updateChat('<em>User ' + data.username + ' has left the lobby.</em>');
            break;
          case 'enter':
            this.setState({ users: data.usernames })
  
            break;
          case 'message':
            // this.updateChat('<strong>' + data.username + ':</strong> ' + data.message);
            break;
          case 'move':
            this.cardSocket(data.message);
            return true;
  
            break;
        }
      }
    }
  
    cardSocket(cardData) {
      this.props.sockCardData(cardData);

      return true;
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

      if (this.state.redirectToGame) {
        return (
            <Redirect to="/game"/>
        )
      }
  
      if (this.state.redirectToHome) {
        return (
            <Redirect to="/"/>
        )
      }
  
      return(
          <div className="container">

            <h2>Hello {this.state.user}</h2>

            <button onClick={() => this.logOutAll()} className="btn btn-primary">log all out</button>

            <div>
              {this.state.users.map((user, i) =>

                  <div className="selectUserBox" key={i} onClick={() =>  this.selectUser(user)}>

                    <Alert color="info" isOpen={true}>
                      {user} 
                    </Alert>

                  </div>

              )}
            </div>

            <ul>
              {this.props.cards.map((card, i) =>
                  <li key={i} className="general-card" style={{backgroundPosition: card.pos}} onClick={() => this.handleClick(card)}></li>
              )}
            </ul>

            <div>

              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{this.state.from} Would like to challenge you to a game!</ModalHeader>
                {/* <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                */}
                <ModalFooter>
                  <Button color="primary" onClick={() => this.agreedToChallenge()}>Yes</Button>
                  <Button color="danger" onClick={this.toggle}>No</Button>
                </ModalFooter>
              </Modal>

            </div>
          </div>
      )
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
