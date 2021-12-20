import {getNumber, getNumberWithAim, run02_01, run02_02} from './02-dive';

describe('getNumber function', () => {
  it('returns XXX given input', () => {
    expect(getNumber('forward 5\ndown 5\nforward 8')).toBe(5 * 13);
  });

  it('does not crash on bad direction', () => {
    expect(getNumber('forward 5\ndown 5\nfoo 8')).toBe(5 * 5);
  });
});

describe('getNumberWithAim function', () => {
  it('returns XXX given input', () => {
    expect(getNumber('forward 5\ndown 5\nforward 8')).toBe(5 * 13);
  });

  it('does not crash on bad direction', () => {
    expect(getNumber('forward 5\ndown 5\nfoo 8')).toBe(5 * 5);
  });
});

describe('run02_01', () => {
  it('does not error, returns true on good file', () => {
    expect(run02_01('/day02.txt')).toBe(true);
  });

  it('does not error, returns false on bad file', () => {
    expect(run02_01('/bad.txt')).toBe(false);
  });
});

describe('run02_02', () => {
  it('does not error, returns true on good file', () => {
    expect(run02_02('/day02.txt')).toBe(true);
  });

  it('does not error, returns false on bad file', () => {
    expect(run02_02('/bad.txt')).toBe(false);
  });
});
