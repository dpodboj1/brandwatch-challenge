//  calcSize is used to determine fontsize of certain topic inside cloud
export const calcSize = (value) => {
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
};

//  calcColor is used to determine color of certain topic inside cloud
export const calcColor = (value) => {
  if (value > 60) {
    return 'positive';
  } else if (value < 40) {
    return 'negative';
  }
  return 'neutral';
};
