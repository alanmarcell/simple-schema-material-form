import React, { Component } from 'react';


export default class Wrapper extends Component {
  render() {

    console.log('Examples', this.props)
    console.log('Examples STATE', this.state)

    return (
      <div>{this.props.children}
        <div>State</div>
      </div>
    );
  }
}
