import React from 'react';

interface IMainProps {}

interface IMainState {
    password: string;
}

class Main extends React.Component<IMainProps, IMainState> {
    constructor(props: IMainProps) {
        super(props);

        this.state = {
            password: ""
        };
    }

    // https://stackoverflow.com/a/51540480/18094846
    generatePassword = (): void => {
        const length: number = 20;
        const wishlist: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$';

        const password: string = Array.from(crypto.getRandomValues(new Uint32Array(length)))
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
            </div>
        );
    }
}

export default Main;
