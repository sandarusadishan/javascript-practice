const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your Age: ", function (ageInput) {
  const Age = parseInt(ageInput); // convert string to number

  rl.question("Enter your Grade: ", function (gradeInput) {
    const Grade = parseInt(gradeInput); // convert string to number

    // Age Group
    if (Age <= 18) {
      console.log("Age Group: You are Child!");
    } else if (Age <= 25) {
      console.log("Age Group: You are Teen!");
    } else {
      console.log("Age Group: You are Adult!");
    }

    // Grade Check
    if (Grade >= 75) {
      console.log("Grade: A");
    } else if (Grade >= 65) {
      console.log("Grade: B");
    } else if (Grade >= 55) {
      console.log("Grade: C");
    } else if (Grade >= 45) {
      console.log("Grade: S");
    } else {
      console.log("Grade: Fail");
    }

    // Job Eligibility
    if (Age >= 22 && Grade >= 45) {
      console.log("Status: Ready for job!");
    } else {
      console.log("Status: Not ready for job!");
    }

    rl.close(); // close input
  });
});
