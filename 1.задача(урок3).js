/*####Задача 1

Напишите функцию `f`, которая возвращает куб числа. Число передается параметром. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.

```js
f(2); // 8
f('Content'); // Error: parameter type is not a Number
```

ответ : */


function kub(a) {
    let result;
  if (typeof a === 'number') {
    result = a * a * a;
  } else {
      throw new Error('parameter type is not a Number') ;
  }
  return(result);
};

kub(2);

kub('Content');