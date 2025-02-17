// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

function queueTime(customers, n) {
    if(n < 1) return 0;
    
    let tills = new Array(n).fill(0)
    
    for(let i = 0; i < customers.length; i++){
        let nextTill = tills.indexOf(Math.min(...tills))
        tills[nextTill] += customers[i]
    }
    
    return Math.max(...tills)
  }