const objects={ 
     name:'antor kumar roy', 
      phone:'01740334951', 
       age:25,  
        selary:25000, 
         motherName:'anti rani roy'
}; 
// for(const obs in objects){ 
//      console.log(obs);
// }; 
  const keys=Object.keys(objects); 
//    console.log(keys);
//    output
//    [ 'name', 'phone', 'age', 'selary', 'motherName' ]   this is property
 
 const values=Object.values(objects); 
//   console.log(values);
//    output  
// [ 'antor kumar roy', '01740334951', 25, 25000, 'anti rani roy' ]  this is values 
 
 const entries=Object.entries(objects); 
//   console.log(entries); 
//    output 
// [
//     [ 'name', 'antor kumar roy' ],
//     [ 'phone', '01740334951' ],
//     [ 'age', 25 ],
//     [ 'selary', 25000 ],
//     [ 'motherName', 'anti rani roy' ]
//   ] 
//   delete objects.motherName; 
//   console.log(objects);


//   const array=[34,54,65,23,54]; 
//    delete array[2]; 
//     console.log(array); 