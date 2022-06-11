import React, {useState} from 'react';
import './App.css';

function App() {
  //Declaring a state for each variable. 
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  
  //Grabbing the values entered into to the input fields and getting using setState to set them as the new state. 
  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  }
  
  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  }
  //Calculating the BMI using the new states for the input values.
  const handleOnClick = () => {
    const newBmi = Math.round(Number(weight)/Math.pow(Number(height),2));
    setBmi(newBmi);
    showMessage();    
  }
  
  //BMI Categories
  const showMessage = () => {   
    const underweight = 'Your BMI is less than 18.5, which makes you underweight.';
    const normalWeight = 'Your BMI is between 18.5 and 24.9, which means your weight is normal. 🎉'
    const overweight = 'Your BMI is between 25 and 29.9, which makes you overweight.'
    const obese = 'Your BMI is higher than 30, which makes you obese.'

    //Determining what message to display.
    if(Number(bmi)< 18.9) {
      return underweight;
    } else if(Number(bmi)>18.9 && Number(bmi)<24.9) {
      return normalWeight;
    } else if(Number(bmi)>24.9 && Number(bmi)<29.9) {
      return overweight;
    } else if (Number(bmi)>29.9) {
      return obese;
    } else {
      const displayMessage = '';
      return displayMessage;
    }
    
}
  return (
    <div className="App">

    <h1>BMI Calculator</h1>
    <div className="Radio-Button-Div">
    <input
    className="Radio-Button"
    type="radio"
    value="Metric"
    name="system" 
    /> <span className="Radio-Label">Metric</span>
    <input
    className="Radio-Button"
    type="radio"
    value="Imperial"
    name="system"
    /> <span className="Radio-Label">Imperial</span>
    </div>
    <input
    className="User-Input" 
    type="number"
    placeholder="Weight"
    value={weight}
    onChange={handleWeightChange}
    />
    <input 
    className="User-Input" 
    type="number"
    placeholder="Height"
    value={height}
    onChange={handleHeightChange} 
    />

    <button 
    className="Calculate-Btn"
    onClick={handleOnClick}
    >Calculate</button>
    <h1 className="BMI-Number">{bmi}</h1>
    <p className="Message" >{showMessage()}</p>
    </div>

  );
}

export default App;
