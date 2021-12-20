import {logger, logName} from '../logging';
import {load} from '../loader';

const childLogger = logger.child({name: `${logName} 02-dive`});

export function getNumber(input: string): number {
  const lines: string[] = input.split('\n');
  childLogger.trace(lines);
  const data = lines.map(val => {
    return val.split(' ');
  });
  childLogger.trace(data);
  let horizontalPosition = 0;
  let depth = 0;
  data.forEach((value, _) => {
    const direction = value[0];
    const amount = Number(value[1]);
    switch (direction) {
      case 'forward':
        horizontalPosition += amount;
        break;
      case 'up':
        depth -= amount;
        break;
      case 'down':
        depth += amount;
        break;
      case '':
        break;
      default:
        childLogger.error(`direction unknown: ${direction}`);
        break;
    }
  });
  return horizontalPosition * depth;
}

export function getNumberWithAim(input: string): number {
  const lines: string[] = input.split('\n');
  childLogger.trace(lines);
  const data = lines.map(val => {
    return val.split(' ');
  });
  childLogger.trace(data);
  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;
  data.forEach((value, _) => {
    const direction = value[0];
    const amount = Number(value[1]);
    switch (direction) {
      case 'forward':
        horizontalPosition += amount;
        depth += aim * amount;
        break;
      case 'up':
        aim -= amount;
        break;
      case 'down':
        aim += amount;
        break;
      case '':
        break;
      default:
        childLogger.error(`direction unknown: ${direction}`);
        break;
    }
  });
  return horizontalPosition * depth;
}

export function run02_01(filename: string): boolean {
  return load(filename, getNumber);
}

export function run02_02(filename: string): boolean {
  return load(filename, getNumberWithAim);
}
