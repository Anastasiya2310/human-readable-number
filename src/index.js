module.exports = function toReadable (number) {
  let readableNum = [
    ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'], 
    ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  ];
  
  if(number === 0) {
    return 'zero';
  } 
  
  if(number > 0 && number <= 19) {
    return readableNum[0][number - 1];
  } 

  if (number >= 20 && number < 100) {
    let x = Math.floor(number / 10);
    let y = number % 10;
    if (y === 0) {
      return readableNum[1][x - 2];
    }
    return `${readableNum[1][x - 2]} ${toReadable(y)}`
  }
  
  let x = Math.floor(number / 100);
  let ans = `${readableNum[0][x - 1]} hundred`
  if (number % 100 > 0) {
    return `${ans} ${toReadable(number % 100)}`
  }
  
  return ans;
}
