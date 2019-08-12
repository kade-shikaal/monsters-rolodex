//Array methods
//methods you can perrform on any array that can perform some kind of action

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Map() allows you to create new arrays based on previous arrays
//iterates over each element in the array
myArray.map(el => el + 1); //increase each element in array

myArray.filter(el => el > 4); //whatever returns true is displayed

myArray.includes(8); //checks if arguement exists in array and returns true or false
