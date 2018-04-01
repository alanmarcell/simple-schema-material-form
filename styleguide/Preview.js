import React, { Component } from 'react';

import Preview from 'react-styleguidist/lib/rsg-components/Preview/Preview';

export default class Wrapper extends Component {
  render() {

    console.log('Preview', this.props)
    console.log('Preview STATE', this.state)

    return (
      <div>
        Preview
        <Preview {...this.props}>State</Preview>
      </div>
    );
  }
}
