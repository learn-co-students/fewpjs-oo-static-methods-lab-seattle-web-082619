class Formatter {
  
  static capitalize(string){
   const upperCase = string.charAt(0).toUpperCase() + string.substring(1);
  return upperCase;
  }
// slice(1) or substring(1)

static sanitize(string){
 return string.replace( /[^A-Za-z0-9 '-]/g, '' )
}
// still need to focus on regex and understanding how to organically create one

static titleize(string){
  this.capitalize(string)
  // stopping here.
}

}


