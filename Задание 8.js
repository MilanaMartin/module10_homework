const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

//Извлекаем по очереди все пары [ключ:значение], где 
//можно получить от массива entry ключ     по индексу 0
//                                значение по индексу 1 
for (const entry of myMap) {
  console.log(`${entry} -> ключ = ${entry[0]}, значение = ${entry[1]}`);
}

console.log(' ')
              
//Извлекаем по очереди все пары [ключ:значение]
// и записываем их в переменные [key, value]
for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}