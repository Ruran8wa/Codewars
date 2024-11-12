function count(string){
    let counter = {}
    if(string.length < 1){
        return {}
    }else{
        for(char of string){
            if(counter[char]){
                counter[char]++
            }else{
                counter[char] = 1
            }
        }
        return counter
    }
}
