import { calcSize, calcColor } from '../helpers';

it('calcSize is correctly returning classNames according to value', () => {
  expect(calcSize(81)).toEqual('TopicCloud--topic_fontsize1');
  expect(calcSize(61)).toEqual('TopicCloud--topic_fontsize2');
  expect(calcSize(41)).toEqual('TopicCloud--topic_fontsize3');
  expect(calcSize(21)).toEqual('TopicCloud--topic_fontsize4');
  expect(calcSize(11)).toEqual('TopicCloud--topic_fontsize5');
  expect(calcSize(1)).toEqual('TopicCloud--topic_fontsize6');
});

it('calcColor is correctly returning classNames according to value', () => {
  expect(calcColor(61)).toEqual('positive');
  expect(calcColor(41)).toEqual('neutral');
  expect(calcColor(21)).toEqual('negative');
});
