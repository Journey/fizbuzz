function main(){
	process.stdin.on('readable', function() {
	  var aSpecialNums = checkArrayLeng(3)( checkUnique ( checkThreeSingleInt(process.stdin.read() )));
		if(aSpecialNums.length === 0){
			console.error("输入格式: 2,3,4. 参数必须是 三个互不相同的个位整数");
			return;
		}else{
			game(1,constructPattern(aSpecialNums,["Fizz","Buzz","Whizz"]));
		}
	});
}
/*game(1,[{
			num: 3,
			description:"Fizz"
		},
		{
			num:5,
			description:"Buzz"
		},
		{
			num:7,
			description:"Whizz"
		}
	]);
*/
function game(num,pattern){
	console.log( processRule3or4( processRule5( num,pattern[0] ),pattern ));

	if(num < 100){
		game( num+1,pattern );
	}
}
function processRule3or4(num,pattern){
	return (typeof num === "number") && 
			pattern.filter(function (item) {
					return num % item.num === 0;
				}).reduce(function(pre,cur,inx) {
					return pre + cur.description;					
				},"") || 
			num;
}
function processRule5(num,pattern){
	return String(num).indexOf(pattern.num) > -1 ? pattern.description : num;
}
function constructPattern(aSpecialNumber, aDescriptors){
	//console.assert(aSpecialNumber.length === aDescriptors.length, ["aSpecialNumber shold have same length as aDescriptors"]);
	return aSpecialNumber.map(function(item,inx){
				return {
					num: item,
					description: aDescriptors[inx]
				}
			});
}
function checkArrayLeng(len){
	return function(aNums) {
		return (aNums.length === len)? aNums : [];
	}	
}
function checkUnique(aNums){
	var sNums = aNums.join("");
	return aNums.every(function(item,inx) {
				return sNums.indexOf(item) === inx;
			}) ? aNums : [];	
}
function checkThreeSingleInt(sInput){
	sInput = sInput ? sInput.toString().trim() : sInput;
	return /^\d,\d,\d$/.test(sInput) ? sInput.split(",") : [];
}



main();


