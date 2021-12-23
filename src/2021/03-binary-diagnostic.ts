import fromBinaryStringUint8 from '@stdlib/number-uint8-base-from-binary-string';
import {logger, logName} from '../logging';
import {load} from '../loader';

const childLogger = logger.child({name: `${logName} 03-binary-diagnostic`});

export function getLeastCommonBit(lines: string[], position: number): string {
  if (getMostCommonBit(lines, position) === '0') return '1';
  return '0';
}

export function getMostCommonBit(lines: string[], position: number): string {
  let one = 0;
  let zero = 0;
  lines.forEach((value, index) => {
    const val = value.charAt(position);
    switch (val) {
      case '0':
        zero += 1;
        break;
      case '1':
        one += 1;
        break;
      default:
        childLogger.error(`unknown binary ${val} ${value} ${index}`);
        break;
    }
  });
  if (one > zero) return '1';
  return '0';
}

export function getPowerConsumption(input: string): number {
  const lines: string[] = input.split('\n');
  lines.pop();
  //childLogger.trace(lines);
  let gammaStrA =
    getMostCommonBit(lines, 0) +
    getMostCommonBit(lines, 1) +
    getMostCommonBit(lines, 2) +
    getMostCommonBit(lines, 3);

  const gammaStrB =
    getMostCommonBit(lines, 4) +
    getMostCommonBit(lines, 5) +
    getMostCommonBit(lines, 6) +
    getMostCommonBit(lines, 7) +
    getMostCommonBit(lines, 8) +
    getMostCommonBit(lines, 9) +
    getMostCommonBit(lines, 10) +
    getMostCommonBit(lines, 11);
  gammaStrA = `0000${gammaStrA}`;
  childLogger.trace(`gammaStrA: ${gammaStrA}`);
  childLogger.trace(`gammaStrB: ${gammaStrB}`);
  const gammaA = fromBinaryStringUint8(gammaStrA) << 8;
  const gammaB = fromBinaryStringUint8(gammaStrB);
  childLogger.info(`gammaA: ${gammaA}`);
  childLogger.info(`gammaB: ${gammaB}`);

  let epsilonStrA =
    getLeastCommonBit(lines, 0) +
    getLeastCommonBit(lines, 1) +
    getLeastCommonBit(lines, 2) +
    getLeastCommonBit(lines, 3);

  const epsilonStrB =
    getLeastCommonBit(lines, 4) +
    getLeastCommonBit(lines, 5) +
    getLeastCommonBit(lines, 6) +
    getLeastCommonBit(lines, 7) +
    getLeastCommonBit(lines, 8) +
    getLeastCommonBit(lines, 9) +
    getLeastCommonBit(lines, 10) +
    getLeastCommonBit(lines, 11);

  epsilonStrA = `0000${epsilonStrA}`;

  childLogger.trace(`epsilonStrA: ${epsilonStrA}`);
  childLogger.trace(`epsilonStrB: ${epsilonStrB}`);

  const epsilonA = fromBinaryStringUint8(epsilonStrA) << 8;
  const epsilonB = fromBinaryStringUint8(epsilonStrB);

  childLogger.info(`epsilonA: ${epsilonA}`);
  childLogger.info(`epsilonB: ${epsilonB}`);

  //return 0;
  return (gammaA + gammaB) * (epsilonA + epsilonB);
}

export function run03_01(filename: string): boolean {
  return load(filename, getPowerConsumption);
}
