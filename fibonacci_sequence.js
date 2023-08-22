
// Creating function 'fibonacciRange' that inputs two parameters, 'start' and 'end' 
function fibonacciRange(start, end) {
    
    // Checking if provided range is valid 
    if (start < 0 || end < 0 || end < start) {
      throw new Error("Invalid range");
    }
  
    //Initializing variable to be used to calculate the next Fibonacci numbers in sequence
    const sequence = [0, 1];
    let current = 1;
  
    while (current < end) {
      sequence.push(current);
      current = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    }

  // Returning of Fibonacci numbers within the specified range
    return sequence.filter(num => num >= start && num <= end);
  }
  
  const startValue = 25;  // Replace with your desired start point
  const endValue = 255;  // Replace with your desired end point
  
  const fibonacciInRange = fibonacciRange(startValue, endValue);
  console.log(fibonacciInRange);
  