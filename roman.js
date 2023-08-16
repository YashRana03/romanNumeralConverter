function convertToRoman(num) {
  let strNum = num.toString();
  let arr = [];

  let millenia = {
    "1": "M",
    
  }
  let centuries = {
    "1": "C",
    "4": "CD",
    "5": "D",
    "9": "CM",
  }
  let tens = {
    "1": "X",
    "4": "XL",
    "5": "L",
    "9": "XC",

  }
  let units = {
    "1": "I",
    "4": "IV",
    "5": "V",
    "9": "IX",
  }
  let count = 0;
  let positions = [units, tens, centuries, millenia]
  for(let i = strNum.length-1; i>= 0; i--) {
   
    
    if(strNum[i] == "0") {
      count++;
      continue;
    }

    else if(strNum[i] == "9") {
      arr.unshift(positions[count]["9"]);
    }
    
    else if(strNum[i] == "4") {
      arr.unshift(positions[count]["4"]);
    }
    else if(strNum[i] >= "5") {
      
      for(let j = 0; j<parseInt(strNum[i])-5; j++) {
        arr.unshift(positions[count]["1"]);
      };
      arr.unshift(positions[count]["5"])
    }
    else {
      for(let j = 0; j<parseInt(strNum[i]); j++) {
        arr.unshift(positions[count]["1"]);
      };

    }
  
  count++;

  }
  
  return arr.join("");
}

convertToRoman(1);
