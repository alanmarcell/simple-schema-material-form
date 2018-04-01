import React, { Component } from 'react';
import { mapObjIndexed, values } from 'ramda';

const ValuesList = props => {
  return (
    <div>
      <p>{props.propName}:{props.propValue}</p>
    </div>
  );
};

export default class Values extends Component {
  render() {
    console.log('Values', this.props);
    console.log('JSON.stringify', JSON.stringify(this.props, null, '\t'));

    const propValues = values(mapObjIndexed((val, key) => ({ propName: key, propValue: val }), this.props));

    console.log('Values propValues', propValues);
    return (
      <div>
        Values
        <div>{propValues.map(ValuesList)}</div>
      </div>
    );
  }
}
