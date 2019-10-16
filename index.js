class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]/g, '')
  }

  static titleize(string) {
    let words_keep = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let array = string.split(' ')
    let result = []
    array.forEach(word => {
      if (word === array[0] || !words_keep.includes(word)) {
        result.push(word[0].toUpperCase() + word.slice(1))
      }
      else {
        result.push(word)
      }
    })
    return result.join(" ")
  }
}
