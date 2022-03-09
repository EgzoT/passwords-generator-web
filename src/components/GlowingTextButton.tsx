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
                color: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "3px solid #000",
                borderRadius: 15,
                cursor: 'pointer',
                webkitTapHighlightColor: 'transparent',
                userSelect: 'none',
                transition: "all 0.5s ease-out"
            }, ...props.style, ... hover && props.styleHover ? props.styleHover : {} }}
        >
            <div style={{
                margin: "auto",
                transition: "all 0.5s ease-out",
                filter: hover ? "drop-shadow(0px 0px 3px rgba(33,156,243,1)) drop-shadow(0px 0px 3px rgba(33,156,243,1))" : undefined
            }}>
                { props.text }
            </div>
        </div>
    );
}

export default GlowingButton;
