//Сравниваем все элементы со всеми
let array = [1, 2, 1, '1', '2'];
for (let i = 0; i < array.length; ++i) {
  for (let j = 0; j < array.length; ++j) {
    if (i != j) {
      if (typeof (array[i]) === typeof (array[j])) {
        if (array[i] === array[j]) {
          console.log('значение array['+i+'}]==array['+j+']')
        }
        else {
          console.log('значение array['+i+'}]!=array['+j+']')
        }
      }
      else {
        console.log('тип array['+i+'}]!=array['+j+']')
      }
    }
  }
}

//Только уникальные сравнения
let array = [1, 2, 1, '1', '2'];
for (let i = 0; i < array.length-1; ++i) {
  for (let j = i+1; j < array.length; ++j) {
    if (i != j) {
      if (typeof (array[i]) === typeof (array[j])) {
        if (array[i] === array[j]) {
          console.log('значение array['+i+'}]==array['+j+']')
        }
        else {
          console.log('значение array['+i+'}]!=array['+j+']')
        }
      }
      else {
        console.log('тип array['+i+'}]!=array['+j+']')
      }
    }
  }
}