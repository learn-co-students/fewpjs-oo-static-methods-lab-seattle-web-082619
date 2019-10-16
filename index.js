
class Formatter {
  static capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(str) {
    let arr = str.split(' ')
    const leaveLower = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let capArr = arr.map(word => {
      if (!leaveLower.includes(word) || word === arr[0]) {
        return this.capitalize(word)
      } else {
        return word
      }
    })
    return capArr.join(' ')
  }

}