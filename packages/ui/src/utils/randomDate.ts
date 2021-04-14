import m from 'moment';
import momentRandom from 'moment-random';

export const randomDate = ({
  before = 3,
  after = 1,
}: {
  before?: number;
  after?: number;
} = {}) => momentRandom(m().add(before, 'day'), m().subtract(after, 'day'));
