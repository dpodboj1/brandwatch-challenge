import React, { Component } from 'react';
import { TagCloud as TopicCloud } from 'react-tagcloud';
import Info from './Info';
import data from './topics.json';
import './App.css';

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

  calcSize(value) {
    if (value > 80) {
      return 'TopicCloud--topic_fontsize1';
    } else if (value > 60) {
      return 'TopicCloud--topic_fontsize2';
    } else if (value > 40) {
      return 'TopicCloud--topic_fontsize3';
    } else if (value > 20) {
      return 'TopicCloud--topic_fontsize4';
    } else if (value > 10) {
      return 'TopicCloud--topic_fontsize5';
    }
    return 'TopicCloud--topic_fontsize6';
  }

  calcColor(value) {
    if (value > 60) {
      return 'positive';
    } else if (value < 40) {
      return 'negative';
    }
    return 'neutral';
  }

  handleClick(currentTopicId) {
    this.setState({ currentTopicId });
  }

  render() {
    const { topics } = this.state;
    const { currentTopicId } = this.state;
    //  filter through the topics array and return an object which matches currentTopicId
    const topicByCurrentId = topics.filter(topic => topic.key === currentTopicId);
    //  define a customRenderer which allows manipulation of a Topic inside TopicCloud
    const customRenderer = (tag, size, color) => (
      <span
        key={tag.key}
        className={`TopicCloud--topic ${this.calcSize(tag.count)} ${this.calcColor(tag.count)}`}
      >
        {tag.value}
      </span>
    );
    return (
      <main className="App--container">
        <TopicCloud
          tags={topics}
          shuffle={false}
          minSize={1}
          maxSize={2}
          onClick={tag => this.handleClick(tag.key)}
          renderer={customRenderer}
          className="TopicCloud--container"
        />
        {
          //  render Info component if currentTopicId is not empty
          currentTopicId !== ''
          ?
            topicByCurrentId.map(topic => (<Info key={currentTopicId} {...topic} />))
          :
            <div />
        }
      </main>
    );
  }
}

export default App;
