import React, { useState } from 'react';

interface IMainProps {
    value?: string;
    onChange?: (value: string) => void;
    style?: React.CSSProperties;
}

function GlowingInputText(props: IMainProps) {
    const [value, setValue] = useState(props.value ? props.value : "");
    const [focus, setFocus] = useState(false);

    return (
        <input
                type="text"
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
                onChange={ (e) => { setValue(e.target.value); if (props.onChange) { props.onChange(e.target.value) } } }
                onBlur={ () => { setFocus(false) } }
                onFocus={ () => { setFocus(true) } }
            />
    );
}

export default GlowingInputText;
