"use strict";
import {
    fib
} from './lab2.js';
/**
 * Возвращает дробную часть числа num.
 *
 * @param {number} num число, от которого нужно найти дробную часть.
 * @return {number} дробная часть числа.
 */
export function getDecimal(num) {
    if (Math.trunc(num) == num) {
        return 0;
    }
    else if (num < 0) {
        return num - (-Math.ceil(-num));
    }
    if (num > 1) {
        return +(num - Math.trunc(num)).toFixed(2);
    }
}
/**
 * Возвращает строку str с заглавным первым символом.
 *
 * @param {string} str строка, которую нужно преобразовать.
 * @return {string} str с заглавным первым символом.
 */
export function ucFirst(str){
    if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
}
/**
 * Возвращает true, если строка str содержит 'viagra' или 'XXX', а иначе false.
 *
 * @param {string} str проверяемая строка.
 * @return {boolean} true, если строка str содержит 'viagra' или 'XXX', а иначе false.
 */
export function checkSpam(str){
    let lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
/**
 * Проверяет длину строки str.
 * если она превосходит maxlength – заменяет 
 * конец str на символ многоточие "…"
 * 
 * @param {string} str Проверяемая строка.
 * @param {number} maxlength максимальная длина строки.
 * @return {string} str, усеченная строка.
 */
export function  truncate(str, maxlength){
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
/**
 * Дефисы в строке удаляются, а все слова 
 * после них получают заглавную букву.
 * 
 * @param {string} str Проверяемая строка.
 * @return {string} StrNew, преобразованная строка.
 */
export function  camelize(str){
    let STR = str.split("-");
    let StrNew = "";
    for (let i = 0; i <= STR.length - 1; i++) {
        if (i == 0) StrNew = STR[0];
        else StrNew += ucFirst(STR[i]);
    }
    return StrNew;
}
/**
 * Возвращает массив, заполненный числами 
 * Фибоначчи до n-го числа (не включая его).
 * 
 * @param {number} n натуральноее число, количество чисел Фибоначчи.
 * @return {Array} arr, массив с числами Фибоначчи.
 */
export function  fibs(n){
    let arr = [];
    for (let i = 0; i < n; i++) arr.push(fib(i));
    return arr;
}
/**
 * Возвращает массив из элементов, отсортированный по убыванию.
 *
 * @param {Array} arr массив элементов.
 * @return {Array} arr, массив, отсортированный по убыванию.
 */
export function arrReverseSorted(arr){
    return arr.sort((a, b) => b - a);
}
/**
 * Возвращает массив уникальных, не повторяющихся значений.
 *
 * @param {Array} arr массив элементов.
 * @return {Array} arr, массив с уникальными значениями.
 */
export function  unique(arr){
    return Array.from(new Set(arr));
}