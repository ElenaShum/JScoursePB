/*####Задача 7

Написать код который посчитает сумму всех четных элементов в массиве.

```js
var arr = [1,2,3,4];
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.

Ответ :  */

        var arr = [1,2,3,4];

        let sum = 0;
        for (let i=0; i < arr.length; i++){
            if (arr[i] % 2 == 0){
                sum += arr[i];
            }
        }
        console.log(sum);