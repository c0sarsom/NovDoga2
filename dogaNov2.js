function createArrayOfTiers(num) {
    let string = "" + num
    const array = string.split('')
    const vissz = []
    vissz[0] = array[0]
    for(let i = 1; i < array.length; i++)
      {
        vissz[i] = vissz[i-1] + array[i]
      }
    return vissz
}

function myParseInt(str) {
    if(str.toLowerCase() == str && str.toUpperCase() == str) return parseInt(str);
    else return "NaN";
}  

function disemvowel(str) {
    let String = "";
    for(let i = 0; i < str.length; i++)
      {
        if("aouei".includes(str[i].toLowerCase())) continue;
        String += str[i];
      }
    return String;
  }

function factorial(n){
    if (n == 0) return 1;
    let num = n;
    for(let i = 1; i < n; i++)
      {
        num *= (n - i)
      }
    return num
}