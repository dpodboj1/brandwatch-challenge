import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Topic from './Topic';

class TopicsCloud extends Component {
  render() {
    const { topics } = this.props;
    return (
      <div>
        {
          //  map through the topics array and for each object render a Topic component
          topics.map(topic =>
          (<Topic
            key={topic.id}
            {...topic}
          />))
        }
      </div>
    );
  }
}

TopicsCloud.propTypes = {
  topics: PropTypes.array.isRequired,
};

export default TopicsCloud;
