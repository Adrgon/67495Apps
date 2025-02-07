//Only 3 occurences
/* let regex = /[a-zA-Z]{3}/;
const text = "asR12yT762";
console.log(regex.test(text)); */

/*  //3 or more ocurrences
regex = /[a-zA-Z]{4,}/;
const text = "asRdfghj12yT762";
console.log(regex.test(text));
 */
//Match any digits (numbers)
const digits = "asddssd";
regex = /\d/;
console.log(regex.test(digits));

//Match special characters
const specialCharacters = "ajsdj223_12asd";
regex = /[^a-zA-Z0-9]/;
console.log(regex.test(specialCharacters)); 
