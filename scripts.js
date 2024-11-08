document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const weightInput = document.querySelector('input[name="weight"]');
    const heightInput = document.querySelector('input[name="height"]');
    const bmiResult = document.querySelector('#bmi-result');
    const workoutSuggestion = document.querySelector('#workout-suggestion');
    const dietSuggestion = document.querySelector('#diet-suggestion');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent form from submitting and reloading the page
        
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert('Please enter valid numbers for weight and height.');
            return;
        }

        const bmi = calculateBMI(weight, height);
        const workout = getWorkoutSuggestion(bmi);
        const diet = getDietSuggestion(bmi);

        // Display the results dynamically on the page
        bmiResult.textContent = `Your BMI: ${bmi}`;
        workoutSuggestion.textContent = workout;
        dietSuggestion.textContent = diet;
    });


    window.onload = () => {
        let button = document.querySelector("#btn");
    
        // Function for calculating BMI
        button.addEventListener("click", calculateBMI);
    };

    
    function calculateBMI() {

        /* Getting input from user into height variable.
        Input is string so typecasting is necessary. */
        let height = parseInt(document
            .querySelector("#height").value);
    
        /* Getting input from user into weight variable. 
        Input is string so typecasting is necessary.*/
        let weight = parseInt(document
            .querySelector("#weight").value);
    
        let result = document.querySelector("#result");
    
        // Checking the user providing a proper
        // value or not
        if (height === "" || isNaN(height))
            result.innerHTML = "Provide a valid Height!";
    
        else if (weight === "" || isNaN(weight))
            result.innerHTML = "Provide a valid Weight!";
    
        // If both input is valid, calculate the bmi
        else {
    
            // Fixing upto 2 decimal places
            let bmi = (weight / ((height * height)
                / 10000)).toFixed(2);
    
            // Dividing as per the bmi conditions
            if (bmi < 18.6) result.innerHTML =
                `Under Weight : <span>${bmi}</span>`;
    
            else if (bmi >= 18.6 && bmi < 24.9)
                result.innerHTML =
                    `Normal : <span>${bmi}</span>`;
    
            else result.innerHTML =
                `Over Weight : <span>${bmi}</span>`;
        }
    }

    function getWorkoutSuggestion(bmi) {
        if (bmi < 18.5) {
            return "You are underweight. Focus on gaining muscle mass with weight training and a balanced diet.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return "You have a healthy BMI. Maintain it with a mix of cardio and strength training.";
        } else if (bmi >= 25 && bmi < 29.9) {
            return "You are overweight. Prioritize cardio exercises and strength training for fat loss.";
        } else {
            return "You are obese. Start with low-impact exercises and work up to more intense workouts with a diet plan.";
        }
    }

    function getDietSuggestion(bmi) {
        if (bmi < 18.5) {
            return "Your diet should be high in protein and healthy fats. Eat calorie-dense foods to gain weight.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return "You are in the healthy range. Continue a balanced diet rich in proteins, carbs, and fats.";
        } else if (bmi >= 25 && bmi < 29.9) {
            return "Your diet should focus on reducing calorie intake. Opt for lean proteins and avoid processed foods.";
        } else {
            return "You need a calorie-deficit diet. Focus on vegetables, whole grains, and avoid sugary foods.";
        }
    }
});
