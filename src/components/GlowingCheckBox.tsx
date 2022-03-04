import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import { faBan } from "@fortawesome/free-solid-svg-icons";

// https://www.youtube.com/watch?v=zcELGwSZwx4

interface IMainProps {
    icon?: IconDefinition;
    checked?: boolean;
    onClick?: (value: boolean) => void;
}

function GlowingCheckBox(props: IMainProps) {
    const [checked, setChecked] = useState(props.checked);

    return (
        <div
            onClick={() => { setChecked(!checked); if (props.onClick) { props.onClick(!checked) } }}
            style={{
            width: 60,
            height: 60,
            backgroundColor: "#101010",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "3px solid #000",
            borderRadius: 15
        }}>
            <div style={{ margin: "auto" }}>
                <FontAwesomeIcon
                    icon={ props.icon ? props.icon : faBan }
                    style={{
                        color: !checked ? "#222" : "#FFF",
                        margin: "auto"
                    }}
                />
            </div>
        </div>
    );
}
  
export default GlowingCheckBox;
