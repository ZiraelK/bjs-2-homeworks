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
  if (arr.length === 0){
    diff = 0;
    return diff;
  } else {
diff = Math.max(...arr) - Math.min(...arr);
  return diff; }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
         sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  let result =  sumEvenElement - sumOddElement;
  return result;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
         sumEvenElement += arr[i];
         countEvenElement += 1;
    } 
  }
    if (countEvenElement === 0) {
      return 0;
    }
  let avrEven =  sumEvenElement/countEvenElement;
  return avrEven;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    let midResult = func(...arrOfArr[i]);
    if (midResult > maxWorkerResult) {
      maxWorkerResult = midResult;
    }
  }
  return maxWorkerResult;
}
