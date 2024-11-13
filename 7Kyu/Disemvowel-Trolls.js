function disemvowel(str) {
    return str.split("").filter(char => /[^aeiou]/i.test(char)).join("")
  }