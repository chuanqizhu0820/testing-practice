function capitalize(string){
  let arr = string.split('');
  arr[0] = arr[0].toUpperCase();
    return arr.join('');
}

module.exports=capitalize;
