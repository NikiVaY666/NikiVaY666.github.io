/**
"use strict";
 * Возвращает a, возведённое в b-ную степень.
 *
 * @param {number} a Возводимое в степень число.
 * @param {number} b Степень, должна быть натуральным числом.
 * @return {number} a ** b, возведённое в n-ную степень.
 */

function pow(x, n)
{
    return x**n;
}
/**
 * Возвращает сумму чисел от 1 до n включительно.
 * @param {number} n Число, до которого вычисляется сумма, должно быть натуральным числом.
 * @return {number} sum, сумму чисел от 1 до n включительно.
 */
function sumTo(n)
{
    return (n*(n+1))/2;  //формула суммы арифметической прогрессии

}
/**
 * Возвращает факториал числа n!.
 * @param {number} n Число, факториал которого вычисляется, должно быть натуральным числом.
 * @return {number} res, факториал числа n!.
 */
function factorial(n)
{
    if (n<=0)
    {
        return 1n;
    }
    else{
        res = BigInt (n) *  BigInt(factorial(n-1))
    }
    return res;
}
/**
 * Возвращает n-е число Фибоначчи.
 * @param {number} n Порядковый номер числа Фибоначчи, должен быть натуральным числом.
 * @return {number} b, n-е число Фибоначчи.
 */
function fib(n){
    a = BigInt(1);
    b=BigInt(1);
    if (n== BigInt(0))
    {
        return BigInt(0);
    }
    else
    {
        for (i = BigInt(3); i<=n; i++) 
        {
            c = a+b;
            a=b;
            b=c;
        }
        return b;
    }
}
/**
 * Возвращает результат сравнения значений y и x.
 * @param {number} x Первый аргумент, должен быть целочисленным.
 * @param {number} y Второй аргумент, должен быть целочисленным.
 * @return {function} Анонимная функция, которая вернет true, false или null
 }} Результат сравнения.
 */
function compare(x)
{
return function(y)
{
    if (y>x) return true;
    else if (y<x) return false;
    else if (y==x) return null;
}
}
/**
 * Возвращает сумму всех своих аргументов.
 * @param {number} Значения аргументов.
 * @return {number} result, сумма всех своих аргументов.
 */
function sum()
{
    var result=0;
    for (var i=0; i<arguments.length; i++)
    {
        result+=arguments[i]
    }
    return result;
}
