class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(str) {
    const ignore = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let title = ''

    let titleWords = str.split(' ').map((word, index) => {
      if(ignore.includes(word) && index != 0)
        return word;
      return this.capitalize(word);
    })

    return titleWords.join(' ');
  }
}