function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
      for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      }
      if (arr[i] < min) {
          min = arr[i];
      }
    sum += arr[i];
    }
    avg = Number((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}
function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;

}
function differenceMaxMinWorker(...arr) {
  let diff = 0;
  diff = Math.max(...arr) - Math.min(...arr);
    return diff; 
}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
