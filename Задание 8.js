const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

for (const entry of myMap) {
  console.log(`${entry} -> ключ = ${entry[0]}, значение = ${entry[1]}`);
}

console.log(' ')
              
for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}