localStorage.setItem('Name','jan');
localStorage.setItem('Name2','priya');
let impArray = ['adrak','tomato','patato','onion']


localStorage.removeItem('Name');
// localStorage.clear();
localStorage.setItem('vegetables',JSON.stringify(impArray));
let name2 = localStorage.getItem('Name2');
name1 = JSON.parse(localStorage.getItem('vegetables'));
// console.log(name2)
console.log(name1)
