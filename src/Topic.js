import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Topic extends Component {
  render() {
    return (
      <div
        onClick={this.props.click.bind(null, this.props.id)}>
        {this.props.label}
      </div>
    );
  }
}

Topic.propTypes = {
  click: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Topic;
