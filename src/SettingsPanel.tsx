import {Button} from './Button';
import {ChangeEvent, useEffect, useState} from 'react';

type SettingsPanelPropsType = {
    value: number
    startValue: number
    maxValue: number

    setMaxValueHandler: (value: number) => void
    setStartValueHandler: (value: number) => void
    setSettings: () => void
}


export const SettingsPanel =({value, startValue, maxValue, setStartValueHandler, setMaxValueHandler, setSettings}: SettingsPanelPropsType ) => {

    // const [startValue, setStartValue] = useState<number>(0);
    // const [maxValue, setMaxValue] = useState<number>(0);
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);
    //
    // useEffect(()=>{
    //     const startValueAsString = localStorage.getItem('startValue')
    //     const maxValueAsString = localStorage.getItem('maxValue')
    //     if(startValueAsString || maxValueAsString){
    //         const newStartValue = Number(startValueAsString)
    //         const newMaxValue = Number(maxValueAsString)
    //
    //         setStartValue(newStartValue)
    //         setMaxValue(newMaxValue)
    //     }
    // }, [])
    //
    // useEffect(()=>{
    //     localStorage.setItem('startValue',startValue.toString())
    //     localStorage.setItem('maxValue',maxValue.toString())
    //
    // }, [startValue, maxValue])
    //
    useEffect(() => {
        setIsBtnDisabled(true)
    }, [])

    useEffect(() => {
        if(startValue < 0 || maxValue < 0 || startValue >= maxValue) {
            setIsBtnDisabled(true)
        } else {
            setIsBtnDisabled(false)
        }
    }, [startValue, maxValue]);
    //
    //
    // function setStartValueHandler(e: ChangeEvent<HTMLInputElement>) {
    //     setStartValue(JSON.parse(e.currentTarget.value))
    // }
    //
    // function setMaxValueHandler(e: ChangeEvent<HTMLInputElement>) {
    //     setMaxValue(JSON.parse(e.currentTarget.value))
    // }

    function setSettingsHandler() {
        setSettings();
        setIsBtnDisabled(true)
    }

    return(
        <div className={'settings-panel'}>
            <div className={'settings'}>
                <div className={'settings-input'} >
                    <label>max value</label>
                    <input className={maxValue < 0 || startValue >=maxValue ? 'error-input' : ''} type={'number'} onChange={(e)=>setMaxValueHandler(Number(e.currentTarget.value))} value={maxValue} />
                </div>
                <div className={'settings-input'}>
                    <label>start value</label>
                    <input className={startValue < 0 || startValue >=maxValue ? 'error-input' : ''} type={'number'} onChange={(e)=>setStartValueHandler(Number(e.currentTarget.value))} value={startValue} />
                </div>

            </div>
            <div className={'action-buttons'}>
                <Button title={'Set'} onClickHandler={setSettingsHandler} isBtnDisabled={isBtnDisabled}/>
            </div>

        </div>)
}