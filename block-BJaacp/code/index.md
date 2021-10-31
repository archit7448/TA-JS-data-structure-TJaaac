1. What will be the output and explain the reason.

```js
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;
```

Answer the following with reason after going through the above code:

- `[10] === [10]`// false because array always store itself in different memory location address
- What is the value of obj? // value of the object will be  {name: 'Arya'}
- `obj == newObj` // false beacuse different memory location.
- `obj === newObj`// strict equality doesn't make difference
- `user === newObj`// false beacuse different memory location.
- `user == newObj`// equality doesn't make difference
 `user == obj`// true they are refrencing the same the thing
- `arr == arr2`//true they are refrencing the same the thing
- `arr === arr2`//equality doesn't make difference


2. What's will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.

<!-- To add this image here use ![name](./hello.jpg) -->

```js
function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1);
console.log(person2);
```

3. What will be the output of the below code:

```js
var brothers = ['Bran', 'John'];
var user = {
  name: 'Sansa',
};
user.brothers = brothers;
brothers.push('Robb');
console.log(user.brothers === brothers); //1. true
console.log(user.brothers.length === brothers.length); //2. true
```
