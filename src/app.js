
module.exports = {
    louder(text) {
        return text.toUpperCase() + '!!!1one'
    },
    quieter(text) {
        return text.toLowerCase().replace(/!.*/,'')
    },
    reverseWord(word) {
        return word.split('').reverse().join('');
    }
}
