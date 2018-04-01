import React, { Component } from 'react';
import { mapObjIndexed, values } from 'ramda';

const ValuesList = props => {
  return (
    <div key={props.propName} >
      <p>{props.propName}: {props.propValue}</p>
    </div>
  );
};

export default class Values extends Component {
  render() {
    const propValues = values(mapObjIndexed((val, key) => ({ propName: key, propValue: val }), this.props));

    return (
      <div>
        <div>{propValues.map(ValuesList)}</div>
      </div>
    );
  }
}
