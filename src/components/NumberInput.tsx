import React, { useState } from 'react';

interface IMainProps {
    value?: number;
    onChange?: (value: number) => void;
    style?: React.CSSProperties;
}

function NumberInput(props: IMainProps) {
    const [value, setValue] = useState(props.value ? props.value : 20);

    return (
        <input
            type="number"
            style={{ ...props.style, ...{ width: 100 } }}
            value={ props.value ? props.value : 20 }
            min={ 1 }
            max={ 999 }
            onChange={ (e) => { setValue(Number(e.target.value)); if (props.onChange) { props.onChange(Number(e.target.value)) } } }
        />
    );
}

export default NumberInput;
