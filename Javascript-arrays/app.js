// const numbers =[1,2,3];
// console.log(numbers);

// // const moreNumbers = new Array(5);
// // console.log(moreNumbers);
// // const moreNum = Array.from('hi');
// // console.log(moreNum);

// // const listItems = document.querySelectorAll('li');
// // console.log(listItems);
// // const arrayListItems = Array.from(listItems);
// // console.log(arrayListItems);

// const hobbies =['sports','cooking'];
// hobbies.push('Reading');
// hobbies.unshift('coding');
// console.log(hobbies);
// var last = hobbies.pop();
// console.log(hobbies);
// console.log(last);
// hobbies.shift();
// console.log(hobbies);
// hobbies[1]='coding';
// console.log(hobbies);
// hobbies.splice(0,0, 'Good Food');
// console.log(hobbies);
// hobbies.splice(1,0, 'Good Drinks');
// console.log(hobbies);
// hobbies.splice(1,2, 'Bad Drinks');
// console.log(hobbies);
// hobbies.splice(1,2, ['3','4']);
// console.log(hobbies);
// hobbies.push(1,2, 'Great Dance');
// console.log(hobbies);
// hobbies. splice(-2,1);
// console.log(hobbies);
// hobbies. splice(-2,2);
// console.log(hobbies);
// const testResults = [1,2,3,4,5,6,7];
// //console.log(testResults);
// console.log("testResults0",testResults);
// const storedResults = testResults.slice(0,7);
// const storedResults2 = testResults.slice(0,2);
// const storedResults3 = testResults.slice(-3,2);
// console.log("testResults",testResults);
// console.log("storedResults", storedResults);
// console.log("storedResults2",storedResults2);
// console.log("storedResults3",storedResults3);
// testResults.push(5.92);

// console.log("testResults",testResults,"storedResults",storedResults);
// const storedResults4 = testResults.slice(-3,-2);
// console.log("storedResults4 - -3,-2",storedResults4);

// const arr1 = [1,2,3,4,"value 1"];
// const arr2 = arr1.push([5,6,7]);
// console.log("arr1",arr1);
// console.log("arr2",arr2);
// arr1.push([11,22,33]);
// console.log("arr1",arr1);
// const arr3 = arr1.concat([8,9,10]);
// console.log("arr3", arr3);

// const arr4 = [12,20,13,14,15,"hello"];
// const arr5 = arr4.concat([10,20,30]);
// console.log(arr5);
// console.log(arr5.indexOf(20));
// //IndexOf does not work with objects
// const arr6 = [{name:"Vanishta"}, {name:"Chris"}, {name:"Chris2"}];
// console.log(arr6);
// console.log(arr6.indexOf({name:"Chris"}));

// const personData = [{name:'Max'}, {name:'Karl'}, {name : 'Alex'}];
// console.log(personData.indexOf({name:'Karl'}));
// const karl = personData.find((person, idx, persons)=>{
//    //console.log(person.name);
//    return person.name ==='Karl';
// });
// karl.name='Andras'
// console.log(karl, personData);

// const maxIndex = personData.findIndex((person, idx, persons)=>{
//    //console.log(person.name);
//    return person.name ==='Max';
// });
// console.log("maxIndex", maxIndex);

// const arr7 = ["adfs","test","hi"];
// console.log(arr7.includes("test"));
// console.log(arr7.includes("test44"));

// const prices = [110.99,5.25,3.96,6.59,8.45]
// const tax = 0.05;
// const taxAdjustedPrices = [];
// console.log("prices", prices);
// for(const price of prices){
//     taxAdjustedPrices.push(price * (1 + tax));
// }
// console.log(taxAdjustedPrices);
// const taxAdjustedPrices2=[];
// prices.forEach((price, index, prices)=>{
//     const priceObj = {
//         index, 
//         price,
//         taxAdjustedPrice: price * (1 + tax)
//         }
    
//     taxAdjustedPrices2.push(priceObj);
// });
// console.log(taxAdjustedPrices2);
// //const taxAdjustedPrices3=[];
// const taxAdjustedPrices3 = prices.map((price, index, prices)=>{
//     const priceObj = {
//         index, 
//         price,
//         taxAdjustedPrice: price * (1 + tax)
//         };
    
//     return priceObj;
//    // return taxAdjustedPrices3;
// });
// console.log(taxAdjustedPrices3);
// const sortedPrices = prices.sort();
// console.log(sortedPrices);
// const sortedPrices2 = prices.sort((a,b)=>{
//     if(a>b)
//     return 1;
//     else if (a == b)
//     return 0;
//     else 
//     return -1;
// });
// console.log(sortedPrices2);
// console.log(sortedPrices2.reverse());
// const sortedPrices3 = prices.sort((a,b)=>{
//     if(a>b)
//     return -1;
//     else if (a == b)
//     return 0;
//     else 
//     return 1;
// });
// console.log(sortedPrices3);

// const filteredArray =prices.filter((price, index, prices)=>{
//     return price >6;
// })
// console.log(filteredArray);

// const filteredArr2 = prices.filter(p=> p>6);
// console.log(filteredArr2);

// const sum = prices.reduce((prevValue, currValue, curIndex, prices)=>{
//  return prevValue+currValue;
// },0);
// console.log(sum);
// const sum2 = prices.reduce(prevValue, currValue=> prevValue+currValue,0);
// console.log(sum2);

const data = 'Munich;10.99,;2000';
const transformedData = data.split(';');
console.log("transformedData",transformedData);

const nameFragments = ['vanishta', 'changea'];
const name = nameFragments.join(' ');
console.log(name);