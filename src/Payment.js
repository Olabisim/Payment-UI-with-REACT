import React, { Component } from "react";
import "./payment.css";
import Final from "./Final";

// let formInputs = [
//     {
//       inputObject: document.querySelector("#card_no_input"),
//       targetObject: document.querySelector("#card_no"),
//       regex: /^[(0-9\s{19})]+$/i
//     },
//     {
//       inputObject: document.querySelector("#card_name_input"),
//       targetObject: document.querySelector("#card_name"),
//       regex: /^[A-Z\s]+$/i
//     },
//     {
//       inputObject: document.querySelector("#card_expiry_date_input"),
//       targetObject: document.querySelector("#card_expiry_date"),
//       regex: /(^0[1-9]|1[0-2]+)\/([2-9]{1}[0-9]{1})/
//     },
//     {
//       inputObject: document.querySelector("#card_cvv_input"),
//       targetObject: document.querySelector("#card_cvv"),
//       regex: /^[0-9]{3,4}$/
//     }
//   ];

//   let cardBody = document.getElementById("credit-card-body");

//   formInputs.forEach((obj) => {
//     console.log(obj);
//     obj.inputObject.addEventListener("input", (e) => {
//       if (obj.regex.test(e.target.value)) {
//         if (e.target.id === "card_no_input") {
//           e.target.value = e.target.value
//             .replace(/[^\d]/g, "")
//             .replace(/(.{4})/g, "$1 ")
//             .trim();
//         }

//         obj.targetObject.textContent = e.target.value.trim();
//         e.target.classList.remove("error");
//       } else {
//         if (e.target.value === "") e.target.classList.remove("error");
//         else e.target.classList.add("error");
//       }
//     });
//   });
//   formInputs[3].inputObject.addEventListener("focus", () => {
//     cardBody.classList.add("flip");
//   });
//   formInputs[3].inputObject.addEventListener("blur", () => {
//     cardBody.classList.remove("flip");
//   });

var start = "";

class Payment extends Component {
    state = {
        card_no: "",
        card_name: "",
        card_exp_date: "",
        card_cvc: "",
        flip: false,
        change: false,
        amount: "",
    };

    flipCard = () => {
        this.setState((prevState) => ({
            flip: !prevState.flip,
        }));
    };

    flipChange = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({
            change: !prevState.change,
        }));
    };

    handleChangeCard_no = (e) => {
        this.setState({
            card_no: e.target.value,
        });
    };

    handleChangeCard_name = (e) => {
        this.setState({
            card_name: e.target.value,
        });
    };

    handleChangeCard_exp_date = (e) => {
        this.setState({
            card_exp_date: e.target.value,
        });
    };

    handleChangeCard_cvc = (e) => {
        this.setState({
            card_cvc: e.target.value,
        });
    };

    handleChangeAmount = (e) => {
        this.setState({
            amount: e.target.value,
        });
    };

    componentDidMount() {
        console.log(this.rootNode);
    }

    render() {
        return (
            <>
                {/*
                 
                    initially this.state.change equals false
                    !this.state.change will change to true
                    output the first 
                    else 
                    outputs the second
                 
                */}
                {
                !this.state.change 
                ? 
                (
                    <div ref={(node) => (this.rootNode = node)} class="parent">
                        {/* 
                            <h1>{this.state.value}</h1>
                            <input type="text" onChange={this.handleChange} /> 
                        */}

                        <div class="child">
                            <div class="container">
                                <div id="credit-card">
                                    <div
                                        id="credit-card-body"
                                        className={
                                            this.state.flip ? "flip" : ""
                                        }
                                    >
                                        <div id="card-front">
                                            <img
                                                src="https://lh3.googleusercontent.com/pw/ACtC-3dNXbc3zr0sdNzg3aXh5XQ5ndp9wn_DabZeBltQT0nEF98vnj0hitZwU7mq-5Nlh1hBrjsHmwpzWuU8Yn8sGDLVOdUa6P0plMG51fNeXNRxFUvChgazOq4ZtCIU6DBQ1VkCG6na4MoTkiUC8mhl6lDL=w110-h30-no"
                                                alt="visa card"
                                                class="card-logo"
                                            />
                                            <div class="card-chip">
                                                <div class="component-1"></div>
                                                <div class="component-2"></div>
                                                <div class="component-3"></div>
                                                <div class="component-4"></div>
                                                <div class="component-5"></div>
                                            </div>
                                            <div id="card_no">
                                                {this.state.card_no}
                                            </div>
                                            <div class="card-labels card-holder-label">
                                                Card Holder
                                            </div>
                                            <div class="card-labels">
                                                Expires
                                            </div>
                                            <div id="card_name">
                                                {this.state.card_name}
                                            </div>
                                            <div id="card_expiry_date">
                                                {this.state.card_exp_date}
                                            </div>
                                        </div>
                                        <div id="card-back">
                                            <div id="magnetic_stripe"></div>
                                            <div id="signature"></div>
                                            <div id="card_cvv">
                                                {this.state.card_cvc}
                                            </div>
                                            <div id="disclaimer">
                                                Sed augue lacus viverra vitae
                                                congue eu consequat ac felis.
                                                Quam quisque id diam vel. Quis
                                                risus sed vulputate odio ut enim
                                                blandit. Viverra justo nec
                                                ultrices dui sapien eget mi
                                                proin sed. Amet justo donec enim
                                                diam vulputate. Vestibulum morbi
                                                blandit cursus risus at ultrices
                                                mi. Condimentum vitae sapien
                                                pellentesque habitant. Leo duis
                                                ut diam quam. Cras sed felis
                                                eget velit aliquet sagittis.
                                                Viverra vitae congue eu
                                                consequat ac felis donec et.
                                                Hendrerit gravida rutrum quisque
                                                non tellus orci ac.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form action="" id="credit-card-form">
                                    <div class="form-group">
                                        <label for="card_no_input">
                                            Card No.
                                        </label>
                                        <input
                                            type="number"
                                            name="card_no_input"
                                            id="card_no_input"
                                            maxlength="1"
                                            onChange={this.handleChangeCard_no}
                                        />

                                        <label for="card_name_input">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="card_name_input"
                                            maxlength="20"
                                            onChange={
                                                this.handleChangeCard_name
                                            }
                                        />
                                        <label for="card_expiry_date_input">
                                            Expiry Date
                                        </label>
                                        <input
                                            type="number"
                                            id="card_expiry_date_input"
                                            maxlength="5"
                                            onChange={
                                                this.handleChangeCard_exp_date
                                            }
                                        />
                                        <label for="card_expiry_date_input">
                                            Amount
                                        </label>
                                        <input
                                            type="number"
                                            id="card_expiry_date_input"
                                            maxlength="12"
                                            onChange={this.handleChangeAmount}
                                        />
                                        <label for="card_cvv_input">CVC</label>
                                        <input
                                            type="number"
                                            id="card_cvv_input"
                                            maxlength="4"
                                            onFocus={this.flipCard}
                                            onBlur={this.flipCard}
                                            onChange={this.handleChangeCard_cvc}
                                        />
                                    </div>
                                    <div>
                                        {
                                            // this.state.card_no.length > 16
                                            // &&
                                            // this.state.card_name.length > 7
                                            // &&
                                            // this.state.card_cvc.length > 3
                                            // &&
                                            // this.state.card_exp_date.length > 3
                                            this.state.card_name.length > 7
                                            ? 
                                            <button 
                                            onClick={this.flipChange}
                                            >
                                                NEXT
                                            </button>
                                            : 
                                            <button 
                                            >
                                                NEXT
                                            </button>
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Final amount={this.state.amount} />
                )}
                {/* {this.state.change ? <Final amount={this.state.amount} /> : ""} */}
            </>
        );
    }
}

export default Payment;
