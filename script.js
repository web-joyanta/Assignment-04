// Problem-01 : Tax Calculator
function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || income < expenses) {
    return "Invalid Input";
  } else {
    return (income - expenses) * 0.2;
  }
}
const result = calculateTax(10000, 3000);
// console.log(result);

// Problem 02 : Notification Generator
function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }
  const text = email.split("@");
  const userName = text[0];
  const domainName = text[1];
  return `${userName} sent you an email from ${domainName}`;
}
// console.log(sendNotification("farhan34@yahoo.com"));

// Problem-03: Checking Digits Inside a Name
function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }
    let character = false;
    for (let i = 0; i < name.length; i++) {
        if (name[i] >= 0 && name[i] <= 9) {
            character = true;
            break;
        }
    }
    return character;
}
const result2 = checkDigitsInName('hello3');
console.log(result2);







