import {aperture} from 'ramda';
import sum from 'lodash/sum';
import {logger, logName} from '../logging';
import {load} from '../loader';

const childLogger = logger.child({name: `${logName} 01-sonar-sweep`});

export function getIncreaseCount(input: string): number {
  const lines: string[] = input.split('\n');
  let count = 0;
  lines.forEach((_, index) => {
    const prev = Number(lines[index - 1]);
    const current = Number(lines[index]);
    childLogger.trace(`${prev} < ${current} = ${prev < current}`);
    if (prev < current) count++;
  });
  return count;
}

export function getIncreaseCountSlidingWindow(input: string): number {
  const lines: string[] = input.split('\n');
  let count = 0;
  const data = aperture(3, lines.map(Number));
  childLogger.trace(`data.length: ${data.length}`);
  childLogger.trace(data);
  data.forEach((_, index) => {
    if (index < 1) return;
    const prev = sum(data[index - 1]);
    const current = sum(data[index]);
    childLogger.trace(`${prev} < ${current} = ${prev < current}`);
    if (prev < current) count++;
  });

  return count;
}

export function run01_01(filename: string): boolean {
  return load(filename, getIncreaseCount);
}

export function run01_02(filename: string): boolean {
  return load(filename, getIncreaseCountSlidingWindow);
}
