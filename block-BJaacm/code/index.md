```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // true because in the code , user = newUser ;
- `user === newUser;`// true because they are same strict equality doesn't make difference
- `user.name === newUser.name;`//true beacuse both are taking value by refrence so memory point are same
- `user.name == newUser.name;`// equality doesn't make difference we are dealing with the same thing.
- `user.sibling == newUser.sibling;`// true beacause both are taking value by refrence so memory point are same
- `user.sibling === newUser.sibling;`//equality doesn't make difference we are dealing with the same thing.
- `user.sibling == allBrothers;` // false because it is stored in memory location both roots are different so they can't be the samm thimg 
- `user.sibling === allBrothers;`// false because it is stored in memory location both roots are different so they can't be the samm thimg 
- `brothersCopy === allBrothers;`//false because it is stored in memory location both roots are different so they can't be the samm thimg 
- `brothersCopy == allBrothers;`//false because it is stored in memory location both roots are different so they can't be the samm thimg 
- `brothersCopy == user.sibling;`// true beacause both are taking value by refrence so memory point are same
- `brothersCopy === user.sibling;`// true beacause both are taking value by refrence so memory point are same
- `brothersCopy[0] === user.sibling[0];`// true beacause both are taking value by refrence so memory point are same
- `brothersCopy[1] === user.sibling[1];`// true beacause both are taking value by refrence so memory point are same
- `user.sibling[1] === newUser.sibling[1];`// true beacause both are taking value by refrence so memory point are same
