//MAP
  //Syntax: arr.map((curr,index,array))
Array.prototype.mymap=function(cb){
   let arr=[];
   for (let i = 0; i < this.length; i++) {
        arr.push(cb(this[i],i,this));            
   }
   return arr;
}

//FILTER
Array.prototype.myfilter=function(cb){
   let arr=[];
   for (let i = 0; i < array.length; i++) {
       if(cb(this[i],i,this)) arr.push(this[i]);            
   }
return arr;

//REDUCE
  //Syntax:  arr.reduce((acc,curr,i,arr)=>{},initialvalue)
Array.prototype.myreduce=function(cb,initialvalue){
   var acc=initialvalue;
   for (let i = 0; i < this.length; i++) {
       acc=acc?cb(acc,this[i],i,this):this[i];
   }
      return acc; 
   }
