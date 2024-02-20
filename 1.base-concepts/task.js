"use strict";
function solveEquation(a, b, c) {
  let discriminant = Math.pow(b, 2)-(4*a*c);
  let arr = [];
  if (discriminant > 0) {
    let unknownOne = (-b + Math.sqrt(discriminant) )/(2*a);
    let unknownTwo = (-b - Math.sqrt(discriminant) )/(2*a);
  arr = [unknownOne, unknownTwo];
}
  else if (discriminant == 0) {
    arr = [-b/(2*a)];
  } 
  return arr;
}
function calculateTotalMortgage (percent, contribution, amount, countMonths) {
  let percentMonths = percent/100/12;
  let bodyKredit = amount - contribution;
  let payment = bodyKredit * (percentMonths + (percentMonths / (Math.pow(1+percentMonths, countMonths) - 1)));
  let allpay = Number((payment*countMonths).toFixed(2));
  return allpay;
  }

