/* eslint-disable */
const array = [[12, 3, 4], [0, 0, 0], [23, 5, 6], [123, '6', -5], [0, '0', 'O', 1], ['test']];
/* eslint-enable */

// Напишите функцию, которая считает сумму чисел в каждом вложенном массиве
// и возвращает массив с суммами этих чисел в качестве значений
// если вы встречаете цифру в виде строки, ее нужно нормализовать и посчитать тоже

// выведите итоговый массив в консоль

/*
const normalizeAndSum = (array) => {
  let sum = 0;
  for (const element of array) {
    if (typeof element === 'number') {
      sum += element;
    } else if (typeof Number(element) === 'number' && !isNaN(Number(element))) {
      sum += Number(element);
    }
  }
  return sum;
};
*/

const callback = (acc, element) => (Number.isNaN(Number(element)) ? acc : acc + Number(element));
const normalizeAndSum = (subArray) => subArray.reduce(callback, 0);

const result = array.map(normalizeAndSum);

console.log(result);
