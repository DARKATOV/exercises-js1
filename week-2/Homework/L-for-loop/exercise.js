/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a for loop

*/

let n = 5;

function sumTillNum(num){
	
	var total =0 ; 	
	for (var i=0; i<=n ; i ++ ) {
	total += i ; 
	}
	return total ; 
	
	
	//your code here
	
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));



