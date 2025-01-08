import React, {ChangeEvent, useEffect, useState} from 'react';
import "./App.css";
import { Counter } from "./Counter";
import {SettingsPanel} from './SettingsPanel';

function App() {
  // const maxValue = 10;
  // const minValue = 0;

  const [startValue, setStartValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [value, setValue] = useState<number>(startValue);
  const [isShowText, setIsShowText] = useState(false);

  const isShowError = startValue < 0 || maxValue < 0 ||startValue >= maxValue;



  useEffect(()=>{
    const startValueAsString = localStorage.getItem('startValue')
    const maxValueAsString = localStorage.getItem('maxValue')
    if(startValueAsString || maxValueAsString){
      const newStartValue = Number(startValueAsString)
      const newMaxValue = Number(maxValueAsString)

      setStartValue(newStartValue)
      setMaxValue(newMaxValue)
      setValue(newStartValue)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('startValue',startValue.toString())
    localStorage.setItem('maxValue',maxValue.toString())

  }, [startValue, maxValue])


  function setStartValueHandler(value: number) {
    setStartValue(value)
    setIsShowText(true)
  }

  function setMaxValueHandler(value: number) {
    setMaxValue(value)
    setIsShowText(true)
  }

  function setSettings() {
    setValue(startValue)
    setIsShowText(false)
  }

  function increase() {
    if (value < maxValue) {
      setValue(value + 1);
    }
  }

  function reset() {
    setValue(startValue);
  }


  return (
    <div className="App">
      <SettingsPanel
          value={value}
          startValue={startValue}
          maxValue={maxValue}
          setStartValueHandler={setStartValueHandler}
          setMaxValueHandler={setMaxValueHandler}
          setSettings={setSettings}
      />
      <Counter
        value={value}
        increase={increase}
        reset={reset}
        maxValue={maxValue}
        startValue={startValue}
        isShowText={isShowText}
        isShowError={isShowError}
      />
    </div>
  );
}

export default App;
