import React, { useState } from 'react';

import { faAngleLeft, faAngleRight, faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import GlowingButton from '../components/GlowingButton';

interface IMainProps {
    value?: number;
    onChange?: (value: number) => void;
    style?: React.CSSProperties;
    min?: number;
    max?: number;
}

function NumberInput(props: IMainProps) {
    const [value, setValue] = useState(props.value ? props.value : 20);
    const [focus, setFocus] = useState(false);

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
        }}>
            <div style={{ display: "flex" }}>
                <GlowingButton
                    onClick={ () => { setValue(value - 5); if (props.onChange) { props.onChange(value - 5) } } }
                    icon={ faAngleDoubleLeft }
                    style={{ width: 45, height: 45, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                />
                <GlowingButton
                    onClick={ () => { setValue(value - 1); if (props.onChange) { props.onChange(value - 1) } } }
                    icon={ faAngleLeft }
                    style={{ width: 45, height: 45, borderRadius: 0, borderLeft: "0px solid #000" }}
                />
            </div>
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
                    borderTop: "3px solid #000",
                    borderBottom: "3px solid #000",
                    borderRight: "0px solid #000",
                    borderLeft: "0px solid #000",
                    outline: "black solid 0px",
                    transition: "all 0.5s ease-out"
                }, ...props.style }}
                value={ props.value ? props.value : 20 }
                min={ props.min ? props.min : 1 }
                max={ props.max ? props.max : 999 }
                onChange={ (e) => { setValue(Number(e.target.value)); if (props.onChange) { props.onChange(Number(e.target.value)) } } }
                onBlur={ () => { setFocus(false) } }
                onFocus={ () => { setFocus(true) } }
            />
            <div style={{ display: "flex" }}>
                <GlowingButton
                    onClick={ () => { setValue(value + 1); if (props.onChange) { props.onChange(value + 1) } } }
                    icon={ faAngleRight }
                    style={{ width: 45, height: 45, borderRadius: 0, borderRight: "0px solid #000" }}
                />
                <GlowingButton
                    onClick={ () => { setValue(value + 5); if (props.onChange) { props.onChange(value + 5) } } }
                    icon={ faAngleDoubleRight }
                    style={{ width: 45, height: 45, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                />
            </div>
        </div>
    );
}

export default NumberInput;
