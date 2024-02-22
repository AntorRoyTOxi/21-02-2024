//  const number=[3,4,6,5,4,23,5]; 
//   for(let i=0; i<number.length;i++){ 
//             return number;
//   }; 
//   console.log(number);  
 


const objects={ 
    name:'antor kumar roy', 
     phone:'01740334951', 
      age:25,  
       selary:25000, 
        motherName:'anti rani roy'
};  
 
//  const keys=Object.keys(objects); 
// //   console.log(keys) 
//   for(const key of keys){ 
//      console.log(key);
//   } 
 
    for(const obs in objects){ 
         value=objects[obs] 
         console.log(value);
    }