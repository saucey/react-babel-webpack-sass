
import React, { Component } from 'react';

class MainLayout extends Component {
  render() {
    let year = new Date().getFullYear();
    return (
        <div>
          {this.props.children}
        </div>
    );
  }
}
export default MainLayout;