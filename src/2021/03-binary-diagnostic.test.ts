import {getPowerConsumption, run03_01} from './03-binary-diagnostic';

describe('getPowerConsumption function', () => {
  it('returns XXX given input', () => {
    expect(getPowerConsumption('forward 5\ndown 5\nforward 8')).toBe(5 * 13);
  });

  it('does not crash on bad direction', () => {
    expect(getPowerConsumption('forward 5\ndown 5\nfoo 8')).toBe(5 * 5);
  });
});

describe('run03_01', () => {
  it('does not error, returns true on good file', () => {
    expect(run03_01('/day03.txt')).toBe(true);
  });

  it('does not error, returns false on bad file', () => {
    expect(run03_01('/bad.txt')).toBe(false);
  });
});
