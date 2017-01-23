// function getTempPromise(location){
//   return new Promise (function(resolve,reject){
//     setTimeout(function(){
//       resolve(40);
//       reject('city not found');
//     },1000);
//
//   });
// }
//
// getTempPromise('Jersey').then(function(temp){
// console.log('success',temp);
// },function (err) {
//
// console.log('error',err);
// });

//challenge area

function addPromise(a,b){
  return new Promise (function(resolve,reject){
    if(typeof a === 'number'&& typeof b === 'number' ){
      resolve(a+b);
    }else{
      reject('A and B need to be numbers');
    }
  });
}
addPromise(2,3).then(function(sum){
  console.log('success',sum);
},function(err){
console.log('error',err);
});

addPromise('and',0).then(function(sum){
  console.log('success',sum);
},function(err){
console.log('error',err);
});
