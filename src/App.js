import './App.css';
import React, { useState } from 'react';
import CalculatorForm from './Components/CalculatorForm/CalculatorForm';
import NumericDisplay from './Components/NumericDisplay/NumericDisplay';
import SavedResultList from './Components/SavedResultList/SavedResultlist';

function App() {
  const [memory, setMemory] = useState('0');
  const [current, setCurrent] = useState('0');
  const [operator, setOperator] = useState('+');
  const [history, setHistory] = useState([
    {
      time: 1695050183244,
      value: '0',
    },
    {
      time: 1695050183244,
      value: '0',
    }
  ]);
  return (
    <div className="App">
      <NumericDisplay current={current} operator={operator} memory={memory} />
      <CalculatorForm />
      <SavedResultList history={history} />
    </div>
  );
}

export default App;
