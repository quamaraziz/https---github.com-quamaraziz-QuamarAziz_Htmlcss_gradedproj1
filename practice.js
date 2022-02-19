var obj=[

    {name:"One",val:55},
    
    {name:"Two",val:48},
    
    {name:"Three",val:2},
    
    {name:"Four",val:105},
    
     {name:"Five",val:65},
    
    ]

obj.forEach(function(item){
      if(item.val%2==0){
            console.log('val :', item);
      }  
})

var arr = obj.filter(function(item){
    return item.val >50;
})


var arr2 = obj.map(function(item){
    item.val = item.val * item.val
    return item;
})

var json = `[
    {
        "name" : "Json",
        "type" : "Exchange Format",
        "simailarTypes" : ["XML","YML","CSV"],
        "rating" :  10
    }
]`

var recieved = JSON.parse(json);
console.log(recieved);

var div = function(a,b){
    
    if(typeof a === "number" && typeof b === "number" && b > 0){
        return a/b;
    }
    throw new Error("only numbers are allowed and divisor should be greater than 0");
}
try{
    console.log(div(2,0));
}catch(error){
    console.log(error.message);
}
