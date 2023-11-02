import React, { useState } from 'react';

interface IMainProps {
    value?: string;
    hideText?: boolean;
    onClick?: () => void;
    onChange?: (value: string) => void;
    style?: React.CSSProperties;
}

function GlowingInputText(props: IMainProps) {
    const [focus, setFocus] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.onChange) {
            props.onChange(e.target.value)
        }
    }

    const onClick = () => {
        if (props.onClick) {
            props.onClick()
        }
    }

    return (
        <input
            type={ props.hideText ? "password" : "text" }
            disabled={ true }
            style={{ ...{
                width: 100,
                fontSize: 30,
                WebkitAppearance: "none",
                MozAppearance: "textfield",
                textAlign: "center",
                margin: 0,
                color: "#FFF",
                backgroundColor: !focus ? "#101010" : "#222",
                border: "3px solid #000",
                outline: "black solid 0px",
                transition: "all 0.5s ease-out"
            }, ...props.style }}
            value={ props.value ? props.value : "" }
            onClick={ onClick }
            onChange={ onChange }
            onBlur={ () => { setFocus(false) } }
            onFocus={ () => { setFocus(true) } }
        />
    );
}

export default GlowingInputText;
