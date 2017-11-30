import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Topic from './Topic';

class TopicsCloud extends Component {
  render() {
    const { topics } = this.props;
    return (
      <Topic />
    );
  }
}

TopicsCloud.propTypes = {
  topics: PropTypes.array.isRequired,
};

export default TopicsCloud;
