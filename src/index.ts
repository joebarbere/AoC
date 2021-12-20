import {logger} from './logging';
import {run01_01, run01_02} from './2021/01-sonar-sweep';
import {run02_01, run02_02} from './2021/02-dive';

logger.info('Start!');
//run01_01('/day01.txt');
//run01_02('/day01.txt');
run02_01('/day02.txt');
run02_02('/day02.txt');
