type DisplayPropsType = {
    value: number;
    maxValue: number;
    startValue: number
    isShowText: boolean;
    isShowError: boolean;
};

export const Display = ({value, maxValue,startValue, isShowText, isShowError}: DisplayPropsType) => {
    return (
        <>
            {isShowText && !isShowError && <span className={'text'}>enter values and press 'set'</span>}
            {isShowError && <span className={'text error-text'}>Incorrect value!</span>}
            {!isShowText && !isShowError && <div className={value === maxValue ? 'max-value value' : 'value'}>
                {value}
            </div>
            }
        </>
    );
};
