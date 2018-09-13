module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    // return this.content;
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content.
  // For example:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
      return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}







// // Reverses a string.
// function reverse(string) {
//   return Array.from(string).reverse().join("");
// }

// // Defines a Phrase object.
// function Phrase(content) {
//   this.content = content;

//   // Returns content processed for palindrome testing.
//   this.processor = function(string) {
//     return string.toLowerCase();
//   }

//   // Returns true if the phrase is a palindrome, false otherwise.
//   this.palindrome = function palindrome() {
//     return this.processedContent() === reverse(this.processedContent());
//   }
// }


// // Defines a TranslatedPhrase object.
// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this.translation = translation;

//   // Returns translation processed for palindrome testing.
//   this.processedContent = function processedContent() {
//     return this.processor(this.translation);
//   }
// }

// TranslatedPhrase.prototype = new Phrase();