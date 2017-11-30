import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Topic from './Topic';
import Info from './Info';

class TopicsCloud extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      currentTopicId: '',
    };
  }

  handleClick(currentTopicId) {
    this.setState({ currentTopicId });
  }

  render() {
    const { topics } = this.props;
    const { currentTopicId } = this.state;
    //  filter through the topics array and return an object which matches currentTopicId
    const topicByCurrentId = topics.filter(topic => topic.id === currentTopicId);
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
        {
          //  render Info component if currentTopicId is not empty
          currentTopicId !== ''
          ?
            topicByCurrentId.map(topic => (<Info key={currentTopicId} {...topic} />))
          :
            <p>Click on a topic to get additional info!</p>
        }
      </div>
    );
  }
}

TopicsCloud.propTypes = {
  topics: PropTypes.array.isRequired,
};

export default TopicsCloud;
