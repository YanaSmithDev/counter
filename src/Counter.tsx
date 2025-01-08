import {ActionPanel} from './ActionPanel';
import {Display} from './Display';
import {SettingsPanel} from './SettingsPanel';

export type CounterPropsType = {
    value: number;
    maxValue: number;
    startValue: number;
    isShowText: boolean;
    isShowError: boolean;
    reset: () => void;
    increase: () => void;
};

export const Counter = ({
                            value,
                            maxValue,
                            startValue,
                            isShowText,
                            isShowError,
                            reset,
                            increase,
                        }: CounterPropsType) => {

    return (
        <>
            {/*<SettingsPanel/>*/}
            <div className="counter">
                <Display maxValue={maxValue} value={value} startValue={startValue} isShowText={isShowText}
                         isShowError={isShowError}/>
                <ActionPanel
                    increase={increase}
                    reset={reset}
                    value={value}
                    maxValue={maxValue}
                    startValue={startValue}
                    isShowText={isShowText}
                    isShowError={isShowError}
                />
            </div>
        </>

    );
};
