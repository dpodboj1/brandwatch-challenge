import React, { Component } from 'react';
import data from './topics.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      topics: [],
    };
  }

  componentDidMount() {
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
    console.log(topics);
    return <p>Hello world!</p>;
  }
}

export default App;
