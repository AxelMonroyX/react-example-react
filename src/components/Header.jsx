import React from "react";

export default class Header extends React.Component {
    handleChange(e){
        const title = e.target.value
        this.props.changeName(title)
    }

    render() {
        return (
            <header>
                <h1 style={{ color: 'green' }}>
                    WELCOME HEADER
                </h1>
                Whats your name <input onChange={this.handleChange.bind(this)}></input>
            </header>
        );
    }
}