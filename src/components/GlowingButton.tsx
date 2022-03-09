import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import { faBan } from "@fortawesome/free-solid-svg-icons";

interface IMainProps {
    icon?: IconDefinition;
    onClick?: () => void;
    style?: React.CSSProperties;
    styleHover?: React.CSSProperties;
    iconStyle?: React.CSSProperties;
    iconStyleHover?: React.CSSProperties;
}

function GlowingButton(props: IMainProps) {
    const [hover, setHover] = useState(false);

    return (
        <div
            onClick={() => { if (props.onClick) { props.onClick() } }}
            onMouseEnter={ () => setHover(true) }
            onMouseLeave={ () => setHover(false) }
            style={{ ...{
                width: 60,
                height: 60,
                backgroundColor: "#101010",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "3px solid #000",
                borderRadius: 15,
                cursor: 'pointer',
                webkitTapHighlightColor: 'transparent',
                userSelect: 'none'
            }, ...props.style, ... props.styleHover ? props.styleHover : {} }}
        >
            <div style={{ margin: "auto" }}>
                <FontAwesomeIcon
                    icon={ props.icon ? props.icon : faBan }
                    style={{ ...{
                        color: !hover ? "#222" : "#FFF",
                        margin: "auto",
                        fontSize: 27,
                        transition: "all 0.5s ease-out",
                        filter: hover ? "drop-shadow(0px 0px 3px rgba(33,156,243,1)) drop-shadow(0px 0px 3px rgba(33,156,243,1))" : undefined
                    }, ...props.iconStyle, ... hover && props.iconStyleHover ? props.iconStyleHover : {} }}
                />
            </div>
        </div>
    );
}

export default GlowingButton;
