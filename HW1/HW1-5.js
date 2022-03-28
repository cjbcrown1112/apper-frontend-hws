function convertToVowels(str) {

  letters = str.split("")
  vowels = /[aeiou]/ig
  noConsonants = str.match(vowels).join("")
  return noConsonants
}