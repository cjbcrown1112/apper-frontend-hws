function transform(array){
    
    let n = array.length
    for (let i = 0; i < n; i++)
    array[i] = array[i] * array[i]
    array.sort(
         function compare(x, y) {
      return x - y
    })
    return array
}
