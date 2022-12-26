import {cpus} from 'os'

let num = 0;
const cpusCount = cpus().length;

export const getNextWorker = () => {
  num = num === cpusCount ? 1 : ++num
  return num
}
