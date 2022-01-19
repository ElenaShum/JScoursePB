/*####Задача 2

Напишите функцию `f` которая возвращает сумму всех параметров. Количество параметров может быть любым. Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number

ответ : */


-----------


function f() {
    var result = 0;
  
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
      result += arguments[i]; 
     } else {
        throw new Error ('all parameters type should be a Number');
     }
     }
    return result;
  }
  
  f(1,2,3);
  f(1,2,3,4,5,6,7,8,9);
  f(1,'k',2);
  f('g','f','t',1);