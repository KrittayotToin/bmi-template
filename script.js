function getBMI() {
    let weight = document.getElementById("weight").value; //kg
    let height = document.getElementById("height").value; //m

    //cm to m
    height = height * (10 ** -2);
    let BMI = (weight / (height ** 2)).toFixed(2);
    console.log(BMI);

    let result = document.getElementById("bmi");
    result.innerHTML = BMI;

    let bmi1 = document.getElementById("bmi1");
    let bmi2 = document.getElementById("bmi2");
    let bmi3 = document.getElementById("bmi3");
    let bmi4 = document.getElementById("bmi4");
    let bmi5 = document.getElementById("bmi5");

    // Reset background color of all rows
    bmi1.style.backgroundColor = "";
    bmi2.style.backgroundColor = "";
    bmi3.style.backgroundColor = "";
    bmi4.style.backgroundColor = "";
    bmi5.style.backgroundColor = "";

    BMI = parseFloat(BMI);
    console.log(BMI);
    if (BMI < 18.50) {
        bmi1.style.backgroundColor = "#FFB6C1";
    } else if (BMI <= 22.90 && BMI >= 18.50) {
        bmi2.style.backgroundColor = "#FFB6C1";
    } else if (BMI <= 24.90 && BMI >= 23.00) {
        bmi3.style.backgroundColor = "#FFB6C1";
    } else if (BMI <= 29.90 && BMI >= 25.00) {
        bmi4.style.backgroundColor = "#FFB6C1";
    } else if (BMI >= 30) {
        bmi5.style.backgroundColor = "#FFB6C1";
    }
}
