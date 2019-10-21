
/*
Start by prompting your user to enter a sentence. Then, store the sentence in a variable and print it to the console.
*/
function firstSentence(word)
{
  return word;

}
var input = prompt("Enter any sentance: ");
var getWord = firstSentence(input);
alert(getWord);

/*
Next, create a function that will take the first and last letter of the sentence, capitalize them, and return this as a new string.
*/
function firstAndLast(word)
{
  var firstLastLetter = word.charAt(0)+word.charAt(word.length-1);
    return firstLastLetter.toUpperCase();
}

alert(firstAndLast(getWord));

/*

Create another function that will reverse the order of these two letters and return the result.
*/
function reverse(word)
{
  var newWord = word.charAt(1)+word.charAt(0);
  return newWord;
}

var revWord = reverse(firstAndLast(getWord));
alert(revWord);

/*
Add code to your third function to concatenate the new two-letter string together with the original phrase. It should add the two-letter string at the end, forming the final result "I am a sentenceEI."
*/

function concatenation(reWord,addingWord){
  var reWord2 = reWord+addingWord
  return reWord2;
}
alert(concatenation(getWord,revWord));
/*
Create a fourth function to count the number of letters in the original sentence, divide it by two (rounding down if necessary), and output the letter at this index. Concatenate this letter at the beginning of the original sentence. For example, if "I am a sentence" is my original input, and it has 15 total characters in it. If I divide this by 2, I get 7.5, which rounds down to 7. The letter at the 7th position in the sentence is "s". So my final result is "sI am a sentenceEI"
*/

function fourthFunction(fourth){
  var count=fourth.length;
  var conv = parseFloat(count);
  var avg = conv/2;

  return avg.floor();
}
alert(fourthFunction(getWord));
