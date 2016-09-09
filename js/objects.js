/**
 * Objects
 */

(function(){
	// What is an Object?
	var object1 = {firstName: '', lastName: ''};
	object1.firstName;
	object1['firstName'];

	// Key value pairs can be strings or numbers
	var object = {0: '', 20: ''};
	object1.firstName;
	object1['firstName'];

	// Reference Data Type and Primitive Data Types: objects store values by reference
	var person = 'Blanka';
	var anotherPerson = person;
	person = 'freny';

	console.log(person + ' ' + anotherPerson);

	var person = {name: 'Blanka'};
	var anotherPerson = person;
	person.name = 'freny';

	console.log(person + ' ' + anotherPerson);
	// creating an object
	var Fruit = {
		name: 'apple',
		showName: function () {
			console.log('Fruit name is apple');
		}
	}
	var Fruit =	new Object ();
	Fruit.name = 'apple';
	Fruit.showName = function () {
		console.log('Fruit name is apple');
	};
	// say there are many fruites then??? Constructor Pattern for Creating Objects
	var Fruits = function (theName){
		this.name = theName;
		this.showName = function () {
			console.log('Fruit name is ' + this.name);
		};
	};

	mangoFruit = new Fruits('mango');
	mangoFruit.showName();
	// prototype method
	function Fruits() {

	};
	Fruits.prototype.name = 'pineapple';
	Fruits.prototype.showName = function () {
		console.log('Fruit name is ' + this.name);
	};

	// delete properties
	delete Fruits.name;

	// traversal
	for( var prop in Fruits){

	}
})();