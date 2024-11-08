
import django
from django.shortcuts import render
from flask import Flask, render_template, request

app = Flask(__name__)

# Route to serve the main page
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate_bmi', methods=['POST'])

def calculate_bmi(request):
    if request.method == 'POST':
        weight = float(request.POST['weight'])
        height = float(request.POST['height'])
        bmi = round(weight / (height ** 2))

        # Interpretation of BMI
        interpretation = get_bmi_interpretation(bmi)

        return render(request, 'result.html', {'bmi': bmi, 'interpretation': interpretation})
    
    return render(request, 'index.html')

def get_bmi_interpretation(bmi):
    if bmi < 18.5:
        return 'Underweight'
    elif 18.5 <= bmi < 25:
        return 'Healthy Weight'
    else:
        return 'Overweight'
    
# Route to handle BMI calculation and suggestions
"""@app.route('/calculate_bmi', methods=['POST'])
def calculate_bmi():
    if request.method == 'POST':
        try:
            weight = float(request.form['weight'])
            height = float(request.form['height'])

            # BMI calculation
            bmi = round(weight / ((height / 100) ** 2), 2)

            # Determine BMI category and suggestions
            if bmi < 18.5:
                category = "Underweight"
                workout = "Focus on strength training and calorie-dense diet."
                diet = "Increase your protein and carbohydrate intake."
            elif 18.5 <= bmi < 24.9:
                category = "Normal weight"
                workout = "Maintain with a balanced workout routine."
                diet = "Balanced diet with a focus on all nutrients."
            elif 25 <= bmi < 29.9:
                category = "Overweight"
                workout = "Cardio exercises and strength training."
                diet = "Focus on a calorie-deficit diet rich in fibers."
            else:
                category = "Obesity"
                workout = "Low-impact exercises and gradual strength training."
                diet = "A strict calorie-controlled diet rich in vegetables and lean protein."

            return render_template('index.html', bmi=bmi, workout=workout, diet=diet)

        except ValueError:
            return render_template('index.html', error="Invalid input! Please provide valid numbers.")"""

if __name__ == '__main__':
    app.run(debug=True)
