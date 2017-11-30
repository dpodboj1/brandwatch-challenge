import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Topic extends Component {
  render() {
    return (
      <div>{this.props.label}</div>
    );
  }
}

Topic.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Topic;
