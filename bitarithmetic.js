// // &
// // |
// // <<
// // >>
// // ^
// // ~
// function dec2bin(dec){
//     return (dec >>> 0).toString(2);
// }
// console.log(dec2bin(16))
// console.log(dec2bin(35))
// 2 // 00000010 >> 2^8-1 -128-127 >> 64 bit
//   // 11111101
// 4 // 00000010
// 8 // 00001000
// 16 // 00010000
// 3     // 00000011
// 7     // 00000111
// 3 & 7 // 00000011
// 2     // 00000010
// 6     // 00000110
// 2 | 6 // 00000101
// 3     // 00000011
// 16    // 00010000
// 3 | 16 // 00010011

// console.log(~35)

// function binStr2val(str) {
//   var result = (str[0] === '0') ? str.substring(2) : '-'+str.substring(3) 
//   console.log('binStr2val() data:',str,'result',bin2dec(result)) 
//   return bin2dec(result); 
// }
// function bin2dec(val){ 
//   var power = 1
//   var value = 0
//   for(var i = val.length-1; i >= 0; i--){
//     value += power * val[i] // either add power or not depending on val[i]
//     power *= 2
//   }
//   return value
// }

// 16 16^2  16^3
// 1, 256, 1
function dec2hex(val){
  var num = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
  var str = "0x"
  var power = 4096
  while(power/16 > 1){
    if(val >= power){
      for (var i = 0; i < num.length; i++){
        if (i * power > val){
        }
      }
    }else{
      str += "0"
    }
    power = power / 2
  }
  return str
}


    	
// A new social network automatically matches people together based upon a shared interest. A list of interests for each member of the social network is given in the String[] interests. Each element represents the interests of a single member: each character ('A'-'Z') represents a different interest. Two individuals become friends if they have at least one interest in common. Return the average number of friends each member has.

 
// Definition
    	
// Class:	SocialNetwork
// Method:	averageFriends
// Parameters:	String[]
// Returns:	double
// Method signature:	double averageFriends(String[] interests)
// (be sure your method is public)
    
 
// Notes
// -	Your return value must have an absolute or a relative error at most 10^(-9).
 
// Constraints
// -	interests will contain between 2 and 50 elements, inclusive.
// -	Each character in each element of interests will be an uppercase English letter ('A'-'Z').
// -	The characters in each element of interests will be distinct.
 
// Examples
// 0)	
      
// 00000001,   00000001
// {"A",          "A"}
// Returns: 1.0
// Two people who share a common interest. Thus, they each have one friend, and the average number of friends is therefore also 1.
// 1)	

// 6          9
// 00000110 00001010	
// {"ABC", "ADE",     "FGHIJ"}
// Returns: 0.0
// Three people with no common interests.
// 2)	
    	
// {"ABC", "DE", "FGHIJA"}
// Returns: 0.6666666666666666
// This is almost the same situation as Example #1 but now two of the people share a common interests. Now these three people have 1, 0, and 1 friends, respectively. The average number of friends is (1+0+1)/3 = 2/3 = 0.6666666667.
// 3)	
    	
// {"AB", "AC", "AD", "AE", "BCDE"}
// Returns: 4.0
// All of these people are friends with each other, even though there is no single topic they would all be interested in.
// 4)	
    	
// {"ABCDE", "BCDEF"}
// Returns: 1.0
// Even if people share multiple common interests, they are only friends once.
// 5)	
    	
// {"", "", "", ""}
// Returns: 0.0
// Four grumpy people who are not interested in anything.







console.log(6&10)