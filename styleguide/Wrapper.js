import React, { Component } from 'react';


export default class Wrapper extends Component {
  render() {

    console.log('WRAPPER', this.props)
    console.log('WRAPPER STATE', this.state)

    return (
      <div>{this.props.children}
        <div>State</div>
      </div>
    );
  }
}
