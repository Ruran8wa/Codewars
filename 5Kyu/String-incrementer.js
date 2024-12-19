// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (strng) {
 
    const onlyNum = [];
  
    for (let i = 0; i < strng.length; i++) {
      if (!isFinite(strng[i]) && onlyNum.length) {
        onlyNum.length = 0;
        continue;
      }
  
      if (isFinite(strng[i])) {
        onlyNum.push(strng[i]);
      }
    }
  
    if (!onlyNum.length) {
      return strng + 1;
    }
  
    return (
      strng.slice(0, strng.length - onlyNum.length) +
      String(parseInt(onlyNum.join('')) + 1).padStart(onlyNum.length, "0")
    );
  }
  