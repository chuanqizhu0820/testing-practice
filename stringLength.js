
function stringLength(string){
  let strLen = string.length;
  if (strLen>0 && strLen<11){
    return true;
  }else {
    return false;
  }
}

module.exports = stringLength;
