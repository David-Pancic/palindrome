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
    // return this.content.toLowerCase();
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content.
  this.letters = function letters() {
    return this.content
      .split("")
      .filter(character => character.match(/[a-zA-Z]/))
      .join("");
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
