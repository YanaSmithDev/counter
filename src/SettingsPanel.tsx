import {Button} from './Button';
import {useEffect, useState} from 'react';

type SettingsPanelPropsType = {
    value: number
    startValue: number
    maxValue: number
    isShowError: boolean
    setMaxValueHandler: (value: number) => void
    setStartValueHandler: (value: number) => void
    setSettings: () => void
    isBtnDisabled: boolean
}


export const SettingsPanel = ({
                                  value,
                                  startValue,
                                  maxValue,
                                  isShowError,
                                  setStartValueHandler,
                                  setMaxValueHandler,
                                  setSettings,
                                  isBtnDisabled,
                              }: SettingsPanelPropsType) => {


    // const [isBtnDisabled, setIsBtnDisabled] = useState(true);


    // useEffect(() => {
    //     console.log('useEffect сработал 1');
    //     console.log(isShowError);
    //     if (startValue < 0 || maxValue < 0 || startValue >= maxValue) {
    //         setIsBtnDisabled(true)
    //     } else {
    //         setIsBtnDisabled(false)
    //     }
    // }, [startValue, maxValue]);
    //
    // useEffect(() => {
    //     console.log('useEffect сработал 2');
    //     setIsBtnDisabled(true)
    // }, [])


    function setSettingsHandler() {
        setSettings();
        // setIsBtnDisabled(true)
    }

    return (
        <div className={'settings-panel'}>
            <div className={'settings'}>
                <div className={'settings-input'}>
                    <label>max value</label>
                    <input className={maxValue < 0 || startValue >= maxValue ? 'error-input' : ''} type={'number'}
                           onChange={(e) => setMaxValueHandler(Number(e.currentTarget.value))} value={maxValue}/>
                </div>
                <div className={'settings-input'}>
                    <label>start value</label>
                    <input className={startValue < 0 || startValue >= maxValue ? 'error-input' : ''} type={'number'}
                           onChange={(e) => setStartValueHandler(Number(e.currentTarget.value))} value={startValue}/>
                </div>

            </div>
            <div className={'action-buttons'}>
                <Button title={'Set'} onClickHandler={setSettingsHandler} isBtnDisabled={isBtnDisabled}/>
            </div>

        </div>)
}