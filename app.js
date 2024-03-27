import React, { useState } from 'react';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState('');
  const [average, setAverage] = useState('');

  const handleChange = (e) => {
    setNumbers(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/calculateAverage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ numbers: numbers.split(',').map(num => parseFloat(num.trim())) }),
      });
      const data = await response.json();
      setAverage(data.average.toFixed(2));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Average Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={numbers} onChange={handleChange} placeholder="Enter numbers separated by comma" />
        <button type="submit">Calculate</button>
      </form>
      {average && <p>The average is: {average}</p>}
    </div>
  );
}

export default App;
