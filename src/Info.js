import React from 'react';
import PropTypes from 'prop-types';
import './Info.css';

const Info = props => (
  <div className="Info--container">
    <div>Information on topic: {props.value}</div>
    <div>Total Mentions: {props.count}</div>
    <div>Positive Mentions: <span className="positive" >{props.positive}</span></div>
    <div>Neutral Mentions: {props.neutral}</div>
    <div>Negative Mentions: <span className="negative" >{props.negative}</span></div>
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
