//The longest word in a sentence
function longestWord(sentence) {
    let words = sentence.split(' ');
    let longWord = '';
    
    for (let word of words) {
        if(word.length > longWord.length) {
            longWord = word;
        }
    } 

  return longWord;
}


console.log(longestWord("I'm trying to figure the hell out of Javascript!"))




