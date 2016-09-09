'use strict';
/**
 * A callback function, also known as a higher-order function, is a function that is passed to another function
 * (let’s call this other function “otherFunction”) as a parameter,
 *  and the callback function is called (or executed)
 * inside the otherFunction.
 *
 * source: http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
 */

(function(){

	document.getElementById('title').innerHTML ='Callbacks';
	document.getElementById('title').className ='callbacks';
	function sum(a, b, callFunc) {
		console.log(a+b);
		console.log(typeof callFunc);
		if(typeof callFunc == 'function') callFunc(3, 2);
	};

 	var printSum = function (c) {
		console.log('sum is ' + c);
	};

	sum(2,3, printSum);
	sum(5,9);
})();