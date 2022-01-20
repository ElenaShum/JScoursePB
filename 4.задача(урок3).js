/*####Задача 4

Сделайте функцию `f`, которая принимает параметром число от 1 до 7, 
а затем возвращает день недели на русском языке. 
Данная функция должна обязательно содержать проверку входного параметра,
 потому что принимать она может только числа от 1 до 7.

```js
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number

Ответ : */

function f(a) {
    let day = '';
    if (typeof a === 'number') {
        if (a === 1) {
            day = 'Воскресенье';
        } else if (a === 2) {
            day = 'Понедельник';
        }  else if (a === 3) {
            day =  'Вторник';
        }  else if (a === 4) {
            day =  'Среда';
        } else if (a === 5) {
            day =  'Четверг';
        } else if (a === 6) {
            day =  'Пятница';
        }  else if (a === 7) {
            day =  'Суббота';
        } else {
            throw new Error ('parameter should be in the range of 1 to 7')
        }
    } else {
        throw new Error ('parameter type is not a Number')
    }
   return day;
}

f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number