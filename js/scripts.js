monchTime([51, 46, 49, 52, 49, 53], "f`uN_DH@MRHUSF,(67( 6.5");
//~~hint~~ : this string looks pretty popped, doesn't it?

function convToBytes(str){
	var data = [];
	for (var i = 0; i < str.length; i++){
		data.push(str.charCodeAt(i));
	}
	return data;
}

function proccessPop(pop){
    	var answerIndex = 0;
		var	value;
		var	newString;
		var	code;
		var	i;
    var finalString = "";
    
    for(var loopPop=0; loopPop<pop.length;loopPop++){
   		
      var s = pop[loopPop];
      answerIndex = loopPop;

      value = (loopPop % 65) + 50;
      newString = "";
      for (i=0; i < s.length; i += 2) {
        code = s.charCodeAt(0);
        newString += String.fromCharCode(code ^ value);
      }
		
   	finalString = finalString + newString;
	}

	console.log(finalString);
    
}

function monchTime(arr, str){
	var data = convToBytes(str);
	var q = 0;
	for(var i = 0; i < arr.length; i ++){
		data[q] += arr[i];
		q++;
	}
	console.log(String.fromCharCode.apply(null, data));
}