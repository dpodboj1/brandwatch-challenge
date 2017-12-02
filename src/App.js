import React, { Component } from 'react';
import { TagCloud } from 'react-tagcloud';
import Info from './Info';
import data from './topics.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      topics: [],
      currentTopicId: '',
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
        key: topic.id,
        value: topic.label,
        count: topic.volume,
        negative: topic.sentiment.negative,
        positive: topic.sentiment.positive,
        neutral: topic.sentiment.neutral,
        score: topic.sentimentScore,
      }));
    //  set new state of this.state.topics to topics array
    this.setState({ topics });
  }

  handleClick(currentTopicId) {
    this.setState({ currentTopicId });
  }

  render() {
    const { topics } = this.state;
    const { currentTopicId } = this.state;
    //  filter through the topics array and return an object which matches currentTopicId
    const topicByCurrentId = topics.filter(topic => topic.key === currentTopicId);
    //  define a customRenderer which allows manipulation of a Topic inside TagCloud
    const customRenderer = (tag, size, color) => (
      <span
        key={tag.key}
        style={{
          fontSize: 50,
          color: 'black',
        }}
      >
        {tag.value}
      </span>
    );
    return (
      <div>
        <TagCloud
          tags={topics}
          minSize={1}
          maxSize={2}
          onClick={tag => this.handleClick(tag.key)}
          renderer={customRenderer}
        />
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

export default App;
