"use strict";

let contact = {
  name: "Faye Pursalane",
  address: "121 Main Street",
  city: "Benbrook",
  state: "Texas",
  zip: "76126",
};
// function printLabel(contact) {
//   console.log(contact.name);
//   console.log(contact.address);
//   console.log(contact.city + ",", contact.state, contact.zip);

// }

//or do it this way vvv (backticks) ` ` ` `
function printLabel(contact) {
  let mailingLabel = `
        ${contact.name}
        ${contact.address}
        ${contact.city}, ${contact.state}, ${contact.zip}




`;
  console.log(mailingLabel);
}


let friend = {
  name: "Bob",
  lastName: "Bobberton",
  age: "69",
  jobTitle: "Salesman",
  address: "1234 3 street",
  
};

//these two different params are swapped out by the (contact) portion of the function
printLabel(contact);
printLabel(friend);