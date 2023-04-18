function calculateBMI() {
  // Get the user's input
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);

  // Calculate the BMI
  let bmi = weight / (height * height);

  // Round the BMI to two decimal places
  bmi = bmi.toFixed(2);

  // Display the BMI
  document.getElementById("result").innerHTML = "Your BMI is " + bmi;

  // Display the BMI category
  let category = "";
  if (bmi < 18.5) {
    category = "underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    category = "overweight";
  } else {
    category = "obese";
  }
  document.getElementById("category").innerHTML = "You are " + category;
}
