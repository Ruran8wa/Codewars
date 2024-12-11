// 

function vampireTest(a, b) {
    let product = a * b
    let numStr = product.toString()
    let fangs = `${a}${b}`
    
    sortedNumStr = numStr.split('').sort().join("")
    sortedFangs = fangs.split('').sort().join("")
    
    return sortedNumStr === sortedFangs ? true : false
  }