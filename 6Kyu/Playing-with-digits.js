function digPow(n, p){
    let digits = n.toString().split("").map(Number)
    const sum = digits.reduce((sum, digit, index) => sum + Math.pow(digit, p + index), 0)
    
    return sum % n === 0 ? sum / n : -1
  }