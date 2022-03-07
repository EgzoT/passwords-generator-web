import React, { useState } from 'react';

interface IMainProps {
    text?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    styleHover?: React.CSSProperties;
}

function GlowingButton(props: IMainProps) {
    const [hover, setHover] = useState(false);

    return (
        <div
            onClick={() => { if (props.onClick) { props.onClick() } }}
            onMouseEnter={ () => setHover(true) }
            onMouseLeave={ () => setHover(false) }
            style={{ ...{
                width: 90,
                height: 45,
                fontSize: 16,
                backgroundColor: "#101010",
                color: !hover ? "#FFF" : "#818181",
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
                { props.text }
            </div>
        </div>
    );
}

export default GlowingButton;