/**
 * A callback function, also known as a higher-order function, is a function that is passed to another function
 * (let’s call this other function “otherFunction”) as a parameter, and the callback function is called (or executed)
 * inside the otherFunction.
 * @param  {[type]} a [description]
 * @param  {[type]} b [description]
 * @return {[type]}   [description]
 */
function sum(a,b, callFunc) {
	console.log(a+b);
	callFunc();
}

sum(2,3, function () {
	console.log('done summing');
});
sum(5,9);