import React, { Component } from 'react';
import { mapObjIndexed } from 'ramda';

const valuesList = props => {
  return (
    <div>
      Value Key: {props.propName}
      Value: props.propValue
    </div>
  )
}

export default class Values extends Component {
  render() {
    console.log('Values', this.props)
    console.log('Values STATE', this.state)

    const propValues = mapObjIndexed(this.state);

    console.log('Values propValues', propValues)
    return (
      <div>
        Values js
      </div>
    );
  }
}
