import React, {Component, PropTypes} from 'react';

export default class TripList extends Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.children}
      </div>
    );
  }
}
