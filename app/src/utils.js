import moment from 'moment';

export function generateNumbers(length, maxValue, shouldSort, goal) {
  const numbers = new Set();

  while (numbers.size < length) {
    const value = Math.ceil(Math.random() * maxValue);
    if (!numbers.has(value) && value !== goal) {
      numbers.add(value);
    }
  }

  const arr = Array.from(numbers);
  arr[Math.floor(Math.random() * arr.length)] = goal;

  if (shouldSort === true) {
    arr.sort((a, b) => a - b);
  }

  return arr;
}

export function formatTime(milliseconds) {
  //return moment().milliseconds(milliseconds,).format("mm:ss:SSS");
  return moment("1970-01-01").add(milliseconds, "milliseconds").format("HH:mm:ss:SSS");
}
