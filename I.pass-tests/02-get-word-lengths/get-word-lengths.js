var getWordLengths = function(someWords) {

  const wordLengths = someWords.map(function(someWord){

    return someWord.length;
  });

  return wordLengths;
};

module.exports = getWordLengths;
