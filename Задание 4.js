function rand(max){
    for(i=0;     
        i<10; 
        i++){
      var x = Math.random() * max;
      console.log(Math.floor(x))
    }
  }

  function rand(max, len){
    for(i=0;     
        i<len; 
        i++){
      var x = Math.random() * max;
      console.log(Math.floor(x))
    }
  }
  rand(100)