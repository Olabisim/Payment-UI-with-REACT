import React, { Component } from "react";
import "./Final.css";

class Final extends Component {
    constructor(props) {
        super(props);

        const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        const numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        let alphaArray = new Array();
        let numbArray = new Array();

        for (let i = 0; i < 12; i++) {
            let alp = alpha[Math.floor(Math.random() * 10)];
            alphaArray.push(alp);
        }

        for (let i = 0; i < 12; i++) {
            let num = numb[Math.floor(Math.random() * 10)];
            numbArray.push(num);
        }

        const alphaNumb = alphaArray.concat(numbArray).join("");

        const amountNumb = [10, 20, 30, 40, 50, 60, 70, 80, 90];

        const originalNumb =
            amountNumb[Math.floor(Math.random() * amountNumb.length)];

        this.state = {
            refNum: alphaNumb,
            amount: originalNumb,
        };
    }
    render() {
        return (
            <>  
                <section>
                    <img src="./unnamed.jpg" alt="logo" />
                    <div className="fir_div">
                        <p>
                            If you have any issues with payment, kindly reply to
                            this email or send an email to
                            <a href="#">customercare@ng.airtel.com </a>
                        </p>
                    </div>
                    <div className="sec_div">
                        <div>
                            <p>
                                AIRTEL NIGERIA received your
                                <span>payment of</span>
                            </p>
                            {/* <h2></h2> */}
                            <h2>
                                NGN
                                {/* {this.state.amount} */}
                                {this.props.amount}
                                .00
                            </h2>
                        </div>

                        <div>
                            <h4>Transaction Details</h4>
                            <div className="flex">
                                <span>Reference</span>

                                {
                                    // function myFunction() {
                                    //     myVar = setInterval(alertFunc, 3000);
                                    //   }
                                      
                                }
                                {

                                    // function alertFunc() {
                                    //     alert("Hello!")
                                    // }
                                }
                                <span>
                                    {
                                        // setInterval(() => {
                                            this.state.refNum
                                        // }, 1000)
                                    }
                                </span>
                            </div>
                            <div className="flex">
                                <span>Date</span>
                                <span>{new Date().toLocaleString()}</span>
                            </div>
                            <div className="flex">
                                <span>Card</span>
                                <span>Ending with 0130</span>
                            </div>
                            <div>
                                AIRTEL NIGERIA
                                <span>
                                    <a href="#"> customercare@ng.airtel.com </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <p>© Paystack Inc 2021</p>
                        <p>Modern Payments for Africa</p>
                    </footer>
                    {/* {items.map((item) => {
                        return <pre>{JSON.stringify(item.address.zipcode)}</pre>;
                    })} */}
                </section>
            </>
        );
    }
}

export default Final;

// import React, { useState, useEffect } from "react";

// import "./Final.css";

// const Final = () => {
//     const [items, setItems] = useState([]);

//     let rand = setInterval( () => randomId(), 2000);

//     useEffect(() => {
//         // fetch('https://jsonplaceholder.typicode.com/users')
//         // .then(res => res.json())
//         // .then(json => setItems(json))
//     }, []);

//     const randomId = () => {
//         const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
//         const numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//         let alphaArray = new Array();
//         let numbArray = new Array();

//         for (let i = 0; i < 12; i++) {
//             let alp = alpha[Math.floor(Math.random() * 10)];
//             alphaArray.push(alp);
//         }

//         for (let i = 0; i < 12; i++) {
//             let num = numb[Math.floor(Math.random() * 10)];
//             numbArray.push(num);
//         }

//         const alphaNumb = alphaArray.concat(numbArray).join("");

//         return alphaNumb;
//     };

//     const sinzumoney = () => {
//         const numb = [10, 20, 30, 40, 50, 60, 70, 80, 90];

//         return numb[Math.floor(Math.random() * numb.length)];
//     };

//     console.log(randomId());

//     // let rund = () =>

//     return (
//         <section>
//             <img src="./unnamed.jpg" alt="logo" />
//             <div className="fir_div">
//                 <p>
//                     If you have any issues with payment, kindly reply to this
//                     email or send an email to
//                     <a href="#">customercare@ng.airtel.com </a>
//                 </p>
//             </div>
//             <div className="sec_div">
//                 <div>
//                     <p>
//                         AIRTEL NIGERIA received your
//                         <span>payment of</span>
//                     </p>
//                     <h2>
//                         NGN
//                         {sinzumoney()}
//                         ,000.00
//                     </h2>
//                 </div>

//                 <div>
//                     <h4>Transaction Details</h4>
//                     <div className="flex">
//                         <span>Reference</span>
//                         <span>
//                             {
//                                     rand
//                            }
//                         </span>
//                     </div>
//                     <div className="flex">
//                         <span>Date</span>
//                         <span>{new Date().toLocaleString()}</span>
//                     </div>
//                     <div className="flex">
//                         <span>Card</span>
//                         <span>Ending with 0130</span>
//                     </div>
//                     <div>
//                         AIRTEL NIGERIA
//                         <span>
//                             <a href="#"> customercare@ng.airtel.com </a>
//                         </span>
//                     </div>
//                 </div>
//             </div>
//             <footer>
//                 <p>© Paystack Inc 2021</p>
//                 <p>Modern Payments for Africa</p>
//             </footer>
//             {/* {items.map((item) => {
//                 return <pre>{JSON.stringify(item.address.zipcode)}</pre>;
//             })} */}
//         </section>
//     );
// };

// export default Final;
