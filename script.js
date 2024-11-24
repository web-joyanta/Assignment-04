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
  if (typeof name !== "string") {
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
const result2 = checkDigitsInName("hello3");
// console.log(result2);
// Problem 04 : Calculate Admission Final Score
function calculateFinalScore(obj) {
  if (typeof obj !== "object" || Array.isArray(obj)) {
    return "Invalid Input";
  }
  const name = obj.name;
  const testScore = obj.testScore;
  const schoolGrade = obj.schoolGrade;
  const isFFamily = obj.isFFamily;
  let totalScore = testScore + schoolGrade;
  if (
    typeof name !== "string" ||
    typeof testScore !== "number" ||
    typeof schoolGrade !== "number" ||
    typeof isFFamily !== "boolean" ||
    testScore > 50 ||
    schoolGrade > 30
  ) {
    return "Invalid Input";
  }
  if (isFFamily) {
    totalScore += 20;
  }
  if (totalScore >= 80) {
    return true;
  } else {
    return false;
  }
}

// SAMPLE TEST CASES
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));

// Problem 05:  Predict Avarage Waiting Time
function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  let total = 0;
  for (const time of waitingTimes) {
    total += time;
  }
  const waitingLength = waitingTimes.length;
  const rawAverage = total / waitingLength;
  const average = Math.round(rawAverage);
  const totalPerson = serialNumber - 1;
  const person = totalPerson - waitingLength;
  const averageTime = person * average
  return averageTime;
}

// SAMPLE TEST CASES
console.log(waitingTime([7, 8, 3, 4, 5], "9")); // 24
