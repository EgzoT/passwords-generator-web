import React from 'react';

import GlowingCheckBox from '../components/GlowingCheckBox';
import NumberInput from '../components/NumberInput';
import GlowingInputText from '../components/GlowingInputText';
import GlowingButton from '../components/GlowingButton';
import GlowingTextButton from '../components/GlowingTextButton';

import { IconDefinition, faClipboardList, faClipboardCheck, faClipboard, faSortNumericDown, faSubscript, faFont, faHashtag, faBan } from "@fortawesome/free-solid-svg-icons";

interface IMainProps {}

interface IMainState {
    password: string;
    length: number;

    digits: boolean;
    lowercase: boolean;
    uppercase: boolean;
    specialCharacters: boolean;

    copyStyle: CopyButton;
}

enum CopyButton {
    None = 0,
    Success = 1,
    Error = 2
}

const digits: string = '0123456789';
const lowercase: string = 'abcdefghijklmnopqrstuvwxyz';
const uppercase: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const specialCharacters: string = '~!@-#$';

class Main extends React.Component<IMainProps, IMainState> {
    constructor(props: IMainProps) {
        super(props);

        this.state = {
            password: "",
            length: 20,

            digits: true,
            lowercase: true,
            uppercase: true,
            specialCharacters: true,

            copyStyle: CopyButton.None
        };
    }

    copyTimeout: number = 0;


    getCharacters = (): string => {
        let letters: string = "";

        if (this.state.digits) {
            letters += digits;
        }

        if (this.state.lowercase) {
            letters += lowercase;
        }

        if (this.state.uppercase) {
            letters += uppercase;
        }

        if (this.state.specialCharacters) {
            letters += specialCharacters;
        }

        return letters;
    }

    // https://stackoverflow.com/a/51540480/18094846
    generatePassword = (): void => {
        const wishlist: string = this.getCharacters();

        const password: string = Array.from(crypto.getRandomValues(new Uint32Array(this.state.length)))
            .map((x) => wishlist[x % wishlist.length])
            .join('');

        this.setState({ password: password });
    }

    copyPassword = (): void => {
        let that = this;

        navigator.clipboard.writeText(this.state.password).then(function() {
            // clipboard successfully set
            that.setState({ copyStyle: CopyButton.Success });

            window.clearTimeout(that.copyTimeout);
            that.copyTimeout = 0;

            that.copyTimeout = window.setTimeout(function() {
                that.setState({ copyStyle: CopyButton.None });
            }, 5000);
          }, function() {
            // clipboard write failed
            that.setState({ copyStyle: CopyButton.Error });

            window.clearTimeout(that.copyTimeout);
            that.copyTimeout = 0;

            that.copyTimeout = window.setTimeout(function() {
                that.setState({ copyStyle: CopyButton.None });
            }, 5000);
          });
    }

    getCopyIcon = (): IconDefinition => {
        if (this.state.copyStyle === CopyButton.None) {
            return faClipboardList;
        } else if (this.state.copyStyle === CopyButton.Success) {
            return faClipboardCheck;
        } else if (this.state.copyStyle === CopyButton.Error) {
            return faClipboard;
        } else {
            return faBan;
        }
    }

    getCopyIconStyle = (): React.CSSProperties => {
        if (this.state.copyStyle === CopyButton.None) {
            return { color: "#FFF" };
        } else if (this.state.copyStyle === CopyButton.Success) {
            return { color: "#1db51c" };
        } else if (this.state.copyStyle === CopyButton.Error) {
            return {};
        } else {
            return {};
        }
    }

    getCopyIconStyleHover = (): React.CSSProperties => {
        if (this.state.copyStyle === CopyButton.None) {
            return { color: "#d7d7d7" };
        } else if (this.state.copyStyle === CopyButton.Success) {
            return { color: "#d7d7d7", filter: "drop-shadow(0px 0px 3px rgba(2,211,0,1)) drop-shadow(0px 0px 3px rgba(2,211,0,1))" };
        } else if (this.state.copyStyle === CopyButton.Error) {
            return { color: "#d7d7d7", filter: "drop-shadow(0px 0px 3px rgba(201,44,1,1)) drop-shadow(0px 0px 3px rgba(201,44,1,1))" };
        } else {
            return {};
        }
    }

    render() {
        return (
            <div>
                <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
                    <GlowingInputText value={ this.state.password } style={{ width: 400, fontSize: 16, borderRadius: 15 }} />
                    <GlowingButton
                        icon={ this.getCopyIcon() }
                        onClick={ this.copyPassword }
                        style={{ height: 45, width: 45 }}
                        iconStyle={ this.getCopyIconStyle() }
                        iconStyleHover={ this.getCopyIconStyleHover() }
                    />
                </div>

                <GlowingTextButton
                    text="Generate password"
                    onClick={ this.generatePassword }
                    style={{ width: 160, marginLeft: "auto", marginRight: "auto", marginTop: 10, marginBottom: 10 }}
                />

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 10, marginBottom: 5 }}>
                    <NumberInput
                        value={ this.state.length }
                        onChange={ (v) => { this.setState({ length: v }) } }
                    />
                </div>

                <div style={{ width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 'fit-content', padding: 10, height: 'auto', backgroundColor: "#00000070", marginTop: 10, display: 'flex', gap: 15, alignItems: 'auto', justifyContent: 'auto', borderRadius: 15 }}>
                        <GlowingCheckBox icon={ faSortNumericDown } checked={ true } onClick={ (state: boolean) => { this.setState({ digits: state }) }} />
                        <GlowingCheckBox icon={ faSubscript } checked={ true } onClick={ (state: boolean) => { this.setState({ lowercase: state }) }} />
                        <GlowingCheckBox icon={ faFont } checked={ true } onClick={ (state: boolean) => { this.setState({ uppercase: state }) }} />
                        <GlowingCheckBox icon={ faHashtag } checked={ true } onClick={ (state: boolean) => { this.setState({ specialCharacters: state }) }} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
