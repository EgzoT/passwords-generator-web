import React from 'react';

import GlowingCheckBox from '../components/GlowingCheckBox';
import NumberInput from '../components/NumberInput';

import { faSortNumericDown, faSubscript, faFont, faHashtag } from "@fortawesome/free-solid-svg-icons";

interface IMainProps {}

interface IMainState {
    password: string;
    length: number;

    digits: boolean;
    lowercase: boolean;
    uppercase: boolean;
    specialCharacters: boolean;
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
            specialCharacters: true
        };
    }

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

    render() {
        return (
            <div>
                <input
                    type="text"
                    style={{ width: 300 }}
                    defaultValue={ this.state.password }
                    min={ 1 }
                />

                <button onClick={ this.generatePassword }>
                    Generate password
                </button>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 10, marginBottom: 5 }}>
                    <NumberInput
                        value={ this.state.length }
                        onChange={ (v) => { this.setState({ length: v }) } }
                    />
                </div>

                <div style={{ width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 'fit-content', padding: 10, height: 'auto', backgroundColor: "#00000070", marginTop: 10, display: 'flex', gap: 10, alignItems: 'auto', justifyContent: 'auto', borderRadius: 15 }}>
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
