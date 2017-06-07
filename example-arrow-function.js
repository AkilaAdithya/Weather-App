var names = ['akila','asith','pule'];

/*names.forEach(function(name){
  console.log(name);
});

names.forEach((name)=>{
  console.log('from arrow',name);
});

names.forEach((name)=>console.log('one row',name));

var returnMe = (name)=>name + '!';
console.log(returnMe('Akila'));*/

var person ={
  name:'akila',
  greet:function(){
    names.forEach((name)=>{
      console.log(this.name +' says hi to ' + name)
    })
  }
}

person.greet();

//statement
var addStatement =  (a,b)=>{
  return a+b;
}
console.log(addStatement(3,3));

//expression
var addExpression = (a,b)=>a+b;
console.log(addExpression(2,1));
