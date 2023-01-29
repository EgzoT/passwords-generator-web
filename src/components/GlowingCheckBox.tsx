import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { faBan } from "@fortawesome/free-solid-svg-icons";

// https://www.youtube.com/watch?v=zcELGwSZwx4

interface IMainProps {
    icon?: IconProp;
    checked: boolean;
    onClick?: (value: boolean) => void;
    style?: React.CSSProperties;
}

function GlowingCheckBox(props: IMainProps) {
    const [hover, setHover] = useState(false);

    return (
        <div
            onClick={() => { if (props.onClick) { props.onClick(!props.checked) } }}
            onMouseEnter={ () => setHover(true) }
            onMouseLeave={ () => setHover(false) }
            style={{ ...{
                width: 60,
                height: 60,
                backgroundColor: !hover ? "#101010" : "#141414",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 3,
                borderStyle: "solid",
                borderColor: "#000",
                borderRadius: 15,
                cursor: 'pointer',
                WebkitTapHighlightColor: 'transparent',
                userSelect: 'none',
                transition: "all 0.5s ease-out"
            }, ...props.style }}
        >
            <div style={{ margin: "auto" }}>
                <FontAwesomeIcon
                    icon={ props.icon ? props.icon : faBan }
                    style={{
                        color: !props.checked ? "#222" : "#FFF",
                        margin: "auto",
                        fontSize: 27,
                        transition: "all 0.5s ease-out",
                        filter: props.checked ? "drop-shadow(0px 0px 3px rgba(33,156,243,1)) drop-shadow(0px 0px 3px rgba(33,156,243,1))" : undefined
                    }}
                />
            </div>
        </div>
    );
}
  
export default GlowingCheckBox;
