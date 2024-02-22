const multiply = (a, b) => a * b;
const result = multiply(3, 12);
console.log(result);

const divided = (x, y) => x - y;
const value = divided(32, 23);
console.log(value);

const objects = {
  name: "antor kumar roy",
  age: 34,
};

//   const ageNumber=(person)=>person.age;
//      const age=ageNumber(objects);
//       console.log(age);
//   const ageNumber=(person)=>person.name;
//      const age=ageNumber(objects);
//       console.log(age);

const arraw = (numbers) => numbers[3];
const result2 = arraw([24, 34, 46, 75, 70]);
console.log(result2); 



    //   no perameter 
   const getPI=()=>Math.PI; 
    console.log(getPI());



    //  large arrow function  
      
     const doMath=(x,y,z)=>{ 
           const sum=x+y+z; 
            const multiply=x*y*z; 
             const result=sum+multiply; 
              return result;
     }; 
      console.log(doMath(3,3,6));
