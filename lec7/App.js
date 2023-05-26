// spread operater in array
// spread operater in object
// object destructuring
// objects inside array 
// very useful in real world applications




const array1 = [14,2,3];
const array2 = [5, 36, 7];

console.log(array1);
console.log(array2);

const newarray = [...array1,...array2];
const  newarray1 = [..."123457"];

console.log(newarray1);

  const obj1 = {
    key1: "value1",
    key2: "value2",
  };

  const obj2 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4",
  };

  // //const ob = {...obj1,...obj2};
  // const ob = {...obj1,...obj2,key5:"vale5555"};
  // //const newObject = { ...["item1", "item2"] };
  // const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
  // console.log(newObject);

  const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",
  };
  

  let { bandName, famousSong, ...restProps } = band;




  console.log(bandName);
  console.log(restProps);


const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]
for(let user of users){
    console.log(user.firstName);
}
