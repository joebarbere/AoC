import {logger, logName} from '../logging';
import {load} from '../loader';

const childLogger = logger.child({name: `${logName} 01-dive`});

export function getNumber(input: string): number {
  const lines: string[] = input.split('\n');
  childLogger.info(lines);
  return 0;
}

export function run02_01(filename: string): boolean {
  return load(filename, getNumber);
}
