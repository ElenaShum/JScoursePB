/*#### Задача 10

Отсортировать массив по возрастанию.

```javascript
var arr = [6,5,4,3,2,1];
// [1,2,3,4,5,6]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.



Ответ : */

var arr = [6,5,4,3,2,1];

   for (i=0; i<arr.length; i++){
    for (j=0; j<arr.length; j++){
        if (arr[i]<arr[j]){
            var bols = arr[i];
            arr [i]= arr [j];
            arr [j]= bols;} 
    }
   }   
  console.log(arr);