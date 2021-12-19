import fs from 'fs';
import {logger, logName} from '../logging';

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

export function run01_01(filename: string): boolean {
  try {
    const fileContents = fs.readFileSync(
      fs.realpathSync('./src/2021/input') + filename
    );
    const count = getIncreaseCount(fileContents.toString());
    childLogger.info(`count: ${count}`);
    return true;
  } catch (e: unknown) {
    childLogger.error(e);
    return false;
  }
}
