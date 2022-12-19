scan = prompt("Please enter the data");
var num = +scan;
if (typeof(num) === 'number' && !isNaN(num))
  {
    console.log('число', num)
    if(num%2>0){
      console.log('не четное')
    }else{
      console.log('четное')
    }
  }else{
    console.log("Упс, кажется, вы ошиблись")
  }
