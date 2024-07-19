import React, { Component } from "react";
import '../index.css';
import {MDBBtn, MDBContainer, MDBMask, MDBView} from "mdbreact";
import BookingApp from './appscomponent/BookingAppComponent';
//import {  } from "mdbreact";

class HeaderComponent extends Component {
    render() {
        return (
            <MDBView className="bg">
                <MDBMask overlay="stylish-strong" className="flex-center flex-column text-white text-center">
                    <MDBContainer>
                        <h1 className="font-weight-bold">Welcome to the Real State Project</h1>
                        <h3 className="">It will always stay visible on the top, even when you scroll down</h3>
                        <p>A project using webdevlopement is useful to devlope and define the things in devlopement phase.</p><br />
                        <MDBBtn color="deep-orange">View all products</MDBBtn>
                        <BookingApp />
                    </MDBContainer>
                </MDBMask>
            </MDBView>
        );
    }
}

export default HeaderComponent;