// 'use strict';

// let person = {
//   name: 'Teddy',

//   // Add code here and only here
// };

// {
//   let object = person;
//   person = null;
//   let whatsMyName = object.whatsMyName;
//   console.log(object.whatsMyName()); // logs `Teddy`
//   console.log(whatsMyName()); // logs `Teddy`
//   object.name = 'Rami'
//   console.log(object.whatsMyName()); // logs `Rami`
//   console.log(whatsMyName()); // logs `Rami`
// }


'use strict';

let person = {
  name: 'Teddy',

  whatsMyName: function() {
    return this.name;
  }
};

{
  let object = person;
  person = null;
  let whatsMyName = object.whatsMyName.bind(object);
  console.log(object.whatsMyName()); // logs `Teddy`
  console.log(whatsMyName()); // logs `Teddy`
  object.name = 'Rami'
  console.log(object.whatsMyName()); // logs `Rami`
  console.log(whatsMyName()); // logs `Rami`
}
