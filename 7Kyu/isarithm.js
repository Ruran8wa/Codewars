// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    let char = str.toLowerCase().split("")
    let store = new Set()
    
    for(letter of char){
      if(store.has(letter)){ 
        return false
        }else{
          store.add(letter)
        } 
    }
    return true
  }