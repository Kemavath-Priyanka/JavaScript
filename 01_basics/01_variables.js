const accountId = 144553;
let accountEmail = "priyanka@google.com";
var accountPassword = "12345";
accountCity = "Hyderabad";
let accountState;

// accountId = 2; // not allowed

accountEmail = "kp@kp.com";
accountPassword = "21212121";
accountCity = "Bangalore";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState
]);
