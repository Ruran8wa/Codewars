function stray(numbers) {
    return numbers.filter(num => numbers.indexOf(num) === numbers.lastIndexOf(num))[0]
  }