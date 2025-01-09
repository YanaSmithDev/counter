import React, {ChangeEvent, useEffect, useState} from 'react';
import "./App.css";
import { Counter } from "./Counter";
import {SettingsPanel} from './SettingsPanel';

function App() {

  const [startValue, setStartValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(4);
  const [value, setValue] = useState<number>(startValue);
  const [isShowText, setIsShowText] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);


  useEffect(()=>{
    console.log('use effect из app')
    const startValueAsString = localStorage.getItem('startValue')
    const maxValueAsString = localStorage.getItem('maxValue')

    if(startValueAsString && maxValueAsString){
      const newStartValue = Number(startValueAsString)
      const newMaxValue = Number(maxValueAsString)

      setStartValue(newStartValue)
      setMaxValue(newMaxValue)
      setValue(newStartValue)
    }
  }, [])

  const isShowError = (startValue < 0) || (maxValue < 0) || (startValue >= maxValue);

  useEffect(()=>{
    localStorage.setItem('startValue',startValue.toString())
    localStorage.setItem('maxValue',maxValue.toString())

  }, [startValue, maxValue])


  function setStartValueHandler(value: number) {
    if(value < 0 || value >= maxValue) {
      setIsBtnDisabled(true)
      setStartValue(value)
    } else {
      setStartValue(value)
      setIsShowText(true)
      setIsBtnDisabled(false)
    }

  }

  function setMaxValueHandler(value: number) {
    if(value < 1 || value <= startValue ) {
      setIsBtnDisabled(true)
      setMaxValue(value)
    } else {
      setMaxValue(value)
      setIsShowText(true)
      setIsBtnDisabled(false)
    }

  }

  function setSettings() {
    setValue(startValue)
    setIsShowText(false)
    setIsBtnDisabled(true)
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
          isShowError={isShowText}
          setStartValueHandler={setStartValueHandler}
          setMaxValueHandler={setMaxValueHandler}
          setSettings={setSettings}
          isBtnDisabled={isBtnDisabled}
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
