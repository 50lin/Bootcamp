for (let index = 1; index <= 1000; index++) {

switch (true) {

    
    case (index % 3  == 0 && index % 5 == 0):  
    console.log("FizzBuzz")
        break;
    
    case (index % 3  == 0):  
    console.log("Fizz")
        break;
    
    case (index % 5  == 0):  
    console.log("Buzz")
        break;

    default:console.log(index)
        break;
}


//Otra forma de hacerlo

    //  if (index % 3 == 0 && index % 5 == 0) {
    //      console.log("FizzBuzz")
    //  } else if (index % 5 == 0) {
    //      console.log("Buzz")
    //  } else if (index % 3 == 0) {
    //      console.log("Fizz")
    //  } else {
    //      console.log(index)
    //  }

}