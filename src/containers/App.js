import React, { Component } from 'react';
import { TagCloud as TopicCloud } from 'react-tagcloud';
import { calcSize, calcColor } from '../helpers';
import Info from '../components/Info';
import data from '../topics.json';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      topics: [],
      currentTopicId: '',
      loading: true,
    };
  }

  componentDidMount() {
    const { loading } = this.state;
    if (loading) {
      //  get data and update state whenever component mounts
      this.getData();
    }
  }

  //  method used to get data from topics.json
  getData() {
    //  empty array to push topics to
    const topics = [];
    //  push an object to the topics array with necessary data
    data.topics.map(topic =>
      topics.push({
        key: topic.id,
        value: topic.label,
        count: topic.volume,
        negative: topic.sentiment.negative,
        positive: topic.sentiment.positive,
        neutral: topic.sentiment.neutral,
        score: topic.sentimentScore,
      }));
    const loading = false;
    //  set new state of this.state.topics to topics array, change loading to false
    topics.sort(() => Math.random() - 0.5);
    this.setState({ topics, loading });
  }

  handleClick(currentTopicId) {
    this.setState({ currentTopicId });
  }

  render() {
    const { topics, loading } = this.state;
    const { currentTopicId } = this.state;
    //  filter through the topics array and return an object which matches currentTopicId
    const topicByCurrentId = topics.filter(topic => topic.key === currentTopicId);
    //  define a customRenderer which allows manipulation of a Topic inside TopicCloud
    const customRenderer = (tag, size, color) => (
      <span
        key={tag.key}
        className={`TopicCloud--topic ${calcSize(tag.count)} ${calcColor(tag.count)}`}
      >
        {tag.value}
      </span>
    );
    return (
      <main>
        {
          !loading
          ?
            <section className="App--container">
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
            </section>
          :
            <div>Loading...</div>
        }
      </main>
    );
  }
}