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
  delete objects.motherName; 
  console.log(objects); 
//    output  
// {
//     name: 'antor kumar roy',
//     phone: '01740334951',
//     age: 25,
//     selary: 25000
//   }


//   const array=[34,54,65,23,54]; 
//    delete array[2]; 
//     console.log(array);  


//  const {motherName,...short }=objects; 
//   console.log(short); 
// //    output
// {
//     name: 'antor kumar roy',
//     phone: '01740334951',
//     age: 25,
//     selary: 25000
//   }
 
    // this  part is freeze 
       
    //  Object.freeze(objects);  
    //   objects.sorce=' india '; 
    //    objects.name='prokrity rani roy';
    //    console.log(objects); 
        //  output  অর্থাৎ ফ্রিজ করা থাকলে অবজেক্ট এর ভিতরে কোনো কিছু ঢুকানো যাবে না বা ডিলিট করা যাবে না 
        // {
        //     name: 'antor kumar roy',
        //     phone: '01740334951',
        //     age: 25,
        //     selary: 25000
        //   }

        Object.seal(objects);  
      objects.sorce=' india '; 
       objects.name='prokrity rani roy';
       console.log(objects); 