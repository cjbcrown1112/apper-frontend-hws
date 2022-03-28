function isPalindrome(word) {
  
  word = word.toLowerCase()
  if(word === word.split("").reverse().join("")) 
    return true
  return false
}