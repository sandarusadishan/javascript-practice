let Age = 25;

if (Age <= 18) {
  console.log("Age Griup :You are Child!");
}
if (Age > 18 && Age <= 25) {
  console.log("Age Group : You are Teen !");
} else {
  console.log("Age Group : You are Adult!");
}

let Grade = 100;

if (Grade >= 75) {
  console.log("Grade : A");
}
if (Grade < 75 && Grade >= 65) {
  console.log("Grade : B");
}
if (Grade < 65 && Grade >= 55) {
  console.log("Grade : C");
}
if (Grade < 55 && Grade >= 45) {
  console.log("Grade :S");
} else {
  console.log("Grade : Fail");
}



if (Age >= 22 && Grade >= 45) {
  console.log("Status : Ready for job!");
} else {
  console.log("Status : Not ready for job!");
}

