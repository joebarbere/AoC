import {
  getIncreaseCount,
  getIncreaseCountSlidingWindow,
  run01_01,
  run01_02,
} from './01-sonar-sweep';

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

describe('getIncreaseCountSlidingWindow function', () => {
  it('returns 2 given 2 increases', () => {
    expect(getIncreaseCountSlidingWindow('1\n2\n3\n4\n5\n6\n7\n8\n9')).toBe(6);
  });

  it('returns 0 given 0 increases', () => {
    expect(getIncreaseCountSlidingWindow('9\n8\n7\n6\n5\n4\n3\n2\n1')).toBe(0);
  });

  it('returns 3 given 3 increases', () => {
    expect(
      getIncreaseCountSlidingWindow('1\n2\n1\n4\n1\n1\n5\n1\n1\n6\n1\n1')
    ).toBe(3);
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

describe('run01_02', () => {
  it('does not error, returns true on good file', () => {
    expect(run01_02('/day01.txt')).toBe(true);
  });

  it('does not error, returns false on bad file', () => {
    expect(run01_02('/bad.txt')).toBe(false);
  });
});
