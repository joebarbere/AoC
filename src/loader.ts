import fs from 'fs';
import {logger, logName} from './logging';

const childLogger = logger.child({name: `${logName} loader`});

export function load(filename: string, func: Function): boolean {
  try {
    const fileContents = fs.readFileSync(
      fs.realpathSync('./src/2021/input') + filename
    );
    const ret = func(fileContents.toString());
    childLogger.info(`ret: ${ret}`);
    return true;
  } catch (e: unknown) {
    childLogger.error(e);
    return false;
  }
}
