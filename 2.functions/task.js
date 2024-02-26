function getArrayParams(...arr) {
  let min = -Infinity;
  let max = Infinity;
  let sum = 0;
    for (let i = 0; i < arr.length; i++){
      if (arr[i] > arr[i-1]){
        max = arr[i];
      }
      if (arr[i] < arr[i+1]){
        min =  arr[i];
        }
    sum += arr[i];
    }
    avg = Number((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
