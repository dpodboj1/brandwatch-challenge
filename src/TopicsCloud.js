import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopicsCloud extends Component {
  render() {
    const { topics } = this.props;
    return 'topics will be mapped here';
  }
}

TopicsCloud.propTypes = {
  topics: PropTypes.array.isRequired,
};

export default TopicsCloud;
