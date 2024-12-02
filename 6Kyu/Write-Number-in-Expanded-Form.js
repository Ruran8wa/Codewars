// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 2"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    const numToStr = num.toString()
    let exp = numToStr.length - 1
    let result = []
    for(let y = 0; y < numToStr.length; y++){
        result.push(numToStr[y] * Math.pow(10, exp))
        exp--
      }
    return result.filter(num => num != 0).join(" + ")
  }