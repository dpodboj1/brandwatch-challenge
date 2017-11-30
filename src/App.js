import React, { Component } from 'react';
import TopicsCloud from './TopicsCloud';
import data from './topics.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      topics: [],
    };
  }

  componentDidMount() {
    //  get data and update state whenever component mounts
    this.getData();
  }

  //  method used to get data from topics.json
  getData() {
    //  empty array to push topics to
    const topics = [];
    //  push an object to the topics array with necessary data
    const topicData = data.topics.map(topic =>
      topics.push({
        id: topic.id,
        label: topic.label,
        volume: topic.volume,
        negative: topic.sentiment.negative,
        positive: topic.sentiment.postiive,
        neutral: topic.sentiment.neutral,
        score: topic.sentimentScore,
      }));
    //  set new state of this.state.topics to topics array
    this.setState({ topics });
  }

  render() {
    const { topics } = this.state;
    return (
      <TopicsCloud topics={topics} />
    );
  }
}

export default App;
