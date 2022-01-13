/* 1.  ####Задача 1

Перепишите код, заменив оператор `if` на тернарный оператор `?`

```js
var result;
if (a + b < 4) {
result = true;
} else {
result = false;
}
```

Ответ : */

var result = (a + b < 4) ? 'open' : 'close' ;