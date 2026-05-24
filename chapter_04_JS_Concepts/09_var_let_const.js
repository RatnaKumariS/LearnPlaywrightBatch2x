var v = 10;
let l = 8;
const c = 5.1;


let number = 7;
if (number % 2 === 0) {
    console.log("even" + number);
} else {
    console.log("odd:   " + number);
}

let grade = 79;

if (grade > 90) {
    console.log("Grade A");
} else if (grade > 80) {
    console.log("Grade B");
} else if (grade > 70) {
    console.log("Grade C");
} else if (grade > 60) {
    console.log("Grade D");
} else {
    console.log("Fail");
}


let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap year" + year);
} else if (year > 80) {
    console.log("Not Leap year" + year);
}

let expected = "login";
let actual = "login";
if (expected === actual) {
    console.log("Passed");
} else {
    console.log("Failed");
}