import React from "react";
import Header from "./Header"
import Footer from "./Footer"

export default class Layout extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Axel",
            myaccount: 1
        }
    }
    changeName(name) {
        this.setState({name});
    }
    render() {

        setTimeout(() => {
            let mynewaccount = this.state.myaccount + 1;
            this.setState({myaccount: mynewaccount})
        }, 1000)

        return (
            <div>
                <Header
                    changeName={this.changeName.bind(this)} />
                Hey your {this.state.name} account is {this.state.myaccount}
                <Footer/>
            </div>
        );
    }
}