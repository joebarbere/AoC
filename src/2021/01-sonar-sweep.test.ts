import {getIncreaseCount, run01_01} from './01-sonar-sweep';

describe('getIncreaseCount function', () => {
  it('returns 2 given 2 increases', () => {
    expect(getIncreaseCount('1\n2\n3')).toBe(2);
  });

  it('returns 0 given 0 increases', () => {
    expect(getIncreaseCount('3\n2\n1')).toBe(0);
  });

  it('returns 3 given 3 increases', () => {
    expect(getIncreaseCount('1\n2\n1\n4\n1\n1\n5')).toBe(3);
  });
});

describe('run01_01', () => {
  it('does not error, returns true on good file', () => {
    expect(run01_01('/day01.txt')).toBe(true);
  });

  it('does not error, returns false on bad file', () => {
    expect(run01_01('/bad.txt')).toBe(false);
  });
});
