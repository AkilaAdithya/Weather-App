/*function getTempCallback(location,callback){
  callback(undefined, 32);
  callback('city noy found!');
}

getTempCallback('Srilanka', function(err, temp){
  if(err){
    console.log('error',err);
  }else{
    console.log('success',temp);
  }
});*/

/*function getTempPromise(location){
  return new Promise (function(resolve,reject){
    resolve(32);
    reject('city not found');
  });
}

getTempPromise('Srilanka').then (function(temp){
  console.log('promise success', temp)},function(err){
    console.log('promise failed', err)
  }
});*/

function addPromise(a,b){
  return new Promise(function(resolve, reject){
    if(typeof a ==='number' && typeof b ==='number'){
      resolve(a+b);
    }else{
      reject('error!');
    }
  });
}

addPromise(1,2).then(function(sum){
  console.log(sum);
},function(err){
  console.log(err);
});

addPromise('akila',2).then(function(sum){
  console.log(sum);
},function(err){
  console.log(err);
});
