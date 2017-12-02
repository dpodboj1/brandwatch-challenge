import React from 'react';
import PropTypes from 'prop-types';

const Info = props => (
  <div>
    <p>Information on topic: {props.value}</p>
    <p>Total Mentions: {props.count}</p>
    <p>Positive Mentions: {props.positive}</p>
    <p>Neutral Mentions: {props.neutral}</p>
    <p>Negative Mentions: {props.negative}</p>
  </div>
);

Info.defaultProps = {
  positive: 0,
  neutral: 0,
  negative: 0,
};

Info.propTypes = {
  value: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  positive: PropTypes.number,
  neutral: PropTypes.number,
  negative: PropTypes.number,
};

export default Info;
