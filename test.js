import { equal } from 'assert';
import gulpMdast from './index';

it('should gulpMdast', () =>
  equal(gulpMdast('unicorns'), 'unicorns'));

it('should gulpMdast invalid input', () =>
  equal(gulpMdast(), undefined));
