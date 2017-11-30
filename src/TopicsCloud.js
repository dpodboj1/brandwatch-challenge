import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Topic from './Topic';

class TopicsCloud extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      currentTopicId: '',
    };
  }

  handleClick(currentTopicId) {
    console.log('currentTopicId is:', currentTopicId)
    this.setState({ currentTopicId });
  }

  render() {
    const { topics } = this.props;
    return (
      <div>
        {
          //  map through the topics array and for each object render a Topic component
          topics.map(topic =>
          (<Topic
            click={this.handleClick}
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
