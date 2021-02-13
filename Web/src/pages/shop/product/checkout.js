import React, { Component } from 'react';
import Pageheading from '../../../widgets/Pageheading';

class Checkout extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            inputvalue:{
                "firstname":'Abernathy',
                "lastname":'Ashley'
            },
            errors: {}
        }
    }
    GetCartItems() {
        var ItemCart = JSON.parse(localStorage.getItem("CartProduct"));
        if (ItemCart == null) {
            this.props.history.push(`/`)
        } 
        return ItemCart;
    }
    FormSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){
            localStorage.removeItem("CartProduct");
            this.props.history.push(`/order-complate`)
        }
      }
      handleValidation()
      {
            let inputvalue=this.state.inputvalue;
            let errors = {};
            let formIsValid = true;

            //First Name Validation 
            if (!inputvalue["firstname"]) {
                formIsValid = false;
                errors["firstname"] = "Please Enter First Name";
            }

            if (typeof inputvalue["firstname"] !== "undefined") {
                if (!inputvalue["firstname"].match(/^[a-zA-Z]+$/)) {
                  formIsValid = false;
                  errors["firstname"] = "Please Enter Only Letter";
                }
            }


            //Last Name Validation
            if (!inputvalue["lastname"]) {
                formIsValid = false;
                errors["lastname"] = "Please Enter Last Name";
            }

            if (typeof inputvalue["lastname"] !== "undefined") {
                if (!inputvalue["lastname"].match(/^[a-zA-Z]+$/)) {
                  formIsValid = false;
                  errors["lastname"] = "Please Enter Only Letter";
                }
            }

            //Company Name Validation
            if (!inputvalue["companyname"]) {
                formIsValid = false;
                errors["companyname"] = "Please Enter Company Name";
            }

             //Street Address Validation
             if (!inputvalue["streetaddress"]) {
                formIsValid = false;
                errors["streetaddress"] = "Please Enter Street address";
            }

             //State Validation
             if (!inputvalue["state"]) {
                formIsValid = false;
                errors["state"] = "Please Enter State Name";
            }

            // City Validation
            if (!inputvalue["city"]) {
                formIsValid = false;
                errors["city"] = "Please Enter Town / City Name";
            }

            //Zip Code Validation
            if (!inputvalue["zipcode"]) {
                formIsValid = false;
                errors["zipcode"] = "Please Enter Postcode / ZIP";
            }

            if (typeof inputvalue["zipcode"] !== "undefined") {
                if (inputvalue["zipcode"].length < 6) {
                  formIsValid = false;
                  errors["zipcode"] = "Please Enter valid Postcode / ZIP";
                }
            }

            //Phone No Validation
            if (!inputvalue["phone"]) {
                formIsValid = false;
                errors["phone"] = "Please Enter Phone";
            }

            if (typeof inputvalue["phone"] !== "undefined") {
                if (!inputvalue["phone"].match(/^\d{10}$/)) {
                  formIsValid = false;
                  errors["phone"] = "Please Enter Valid Phone";
                }
            }

            //Email Validation
            if (!inputvalue["email"]) {
                formIsValid = false;
                errors["email"] = "Please Enter Email ID";
            }
            this.setState({ errors: errors });
            return formIsValid;

      }

      handleChange(field, e){
        let inputvalue=this.state.inputvalue;
        inputvalue[field] = e.target.value;
        this.setState({inputvalue});
      }
    render() {
        return (
            <div>
                {/*hero section start*/}
                <section className="position-relative">
                <Pageheading foldername={"Shop"} title={"Product Checkout"} />
                </section>
                {/*hero section end*/}
                {/*body content start*/}
                <div className="page-content">
                    <section>
                        <div className="container">
                            <form  onSubmit={this.FormSubmit.bind(this)}>
                                <div className="row">
                                    <div className="col-lg-7 col-md-12">
                                        <div className="checkout-form box-shadow white-bg">
                                            <h2 className="mb-4">Billing Details</h2>
                                            <form className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>First Name</label>
                                                        <input type="text" id="fname" className="form-control" placeholder="Your firstname" value={this.state.inputvalue.firstname} onChange={this.handleChange.bind(this, "firstname")} />
                                                        <span className="error">{this.state.errors["firstname"]}</span> 
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Last Name</label>
                                                        <input type="text" id="lname" className="form-control" placeholder="Your lastname" value={this.state.inputvalue.lastname} onChange={this.handleChange.bind(this, "lastname")} />
                                                        <span className="error">{this.state.errors["lastname"]}</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>E-mail Address</label>
                                                        <input type="text" id="email" className="form-control" placeholder="State Province" value={this.state.inputvalue.email} onChange={this.handleChange.bind(this, "email")} />
                                                        <span className="error">{this.state.errors["email"]}</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Phone Number</label>
                                                        <input type="text" id="phone" className="form-control" placeholder  value={this.state.inputvalue.phone} onChange={this.handleChange.bind(this, "phone")}/>
                                                        <span className="error">{this.state.errors["phone"]}</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Company Name</label>
                                                        <input type="text" id="companyname" className="form-control" placeholder="Company Name" value={this.state.inputvalue.companyname} onChange={this.handleChange.bind(this, "companyname")} />
                                                        <span className="error">{this.state.errors["companyname"]}</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Select Country</label>
                                                        <div className="form-field"> <i className="icon icon-arrow-down3" />
                                                            <select name="people" id="people" className="form-control" onChange={this.handleChange.bind(this, "country")}>
                                                                <option value="">Select country</option>
                                                                <option value="Alaska">Alaska</option>
                                                                <option value="China">China</option>
                                                                <option value="Japan">Japan</option>
                                                                <option value="Korea">Korea</option>
                                                                <option value="Philippines">Philippines</option>
                                                            </select>
                                                            <span className="error">{this.state.errors["country"]}</span>  
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Street Address</label>
                                                        <input type="text" id="address" className="form-control" placeholder="Enter Your Address"  value={this.state.inputvalue.streetaddress}  onChange={this.handleChange.bind(this, "streetaddress")}/>
                                                        <span className="error">{this.state.errors["streetaddress"]}</span>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" id="address2" className="form-control" placeholder="Second Address" value={this.state.inputvalue.address} onChange={this.handleChange.bind(this, "address")}  />
                                                        <span className="error">{this.state.errors["address"]}</span>  
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Town/City</label>
                                                        <input type="text" id="city" className="form-control" placeholder="Town or City"  value={this.state.inputvalue.city} onChange={this.handleChange.bind(this, "city")} />
                                                        <span className="error">{this.state.errors["city"]}</span>  
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-md-0">
                                                        <label>State/Province</label>
                                                        <input type="text" id="statename" className="form-control" placeholder="State Province" value={this.state.inputvalue.state} onChange={this.handleChange.bind(this, "state")} />
                                                        <span className="error">{this.state.errors["state"]}</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-md-0">
                                                        <label>Zip/Postal Code</label>
                                                        <input type="text" id="zippostalcode" className="form-control" placeholder="Zip / Postal"  value={this.state.inputvalue.zipcode} onChange={this.handleChange.bind(this, "zipcode")} />
                                                        <span className="error">{this.state.errors["zipcode"]}</span>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-12 md-mt-5">
                                        <div className="row mb-5">
                                            <div className="col-md-12">
                                                <h3 className="mb-3 text-black">Coupon Code</h3>
                                                <div className="p-3 p-lg-5 border">
                                                    <label className="text-black mb-3">Enter your coupon code if you have one</label>
                                                    <div className="input-group">
                                                        <input className="form-control" id="c-code" placeholder="Coupon Code" aria-label="Coupon Code" aria-describedby="button-addon2" type="text" />
                                                        <div className="input-group-append">
                                                            <button className="btn btn-primary btn-sm px-4" type="button" id="button-addon2">Apply</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-3 p-lg-5 border">
                                            <h3 className="mb-3">Your Order</h3>
                                            {(this.GetCartItems() != null && this.GetCartItems().length > 0) ?
                                            <ul className="list-unstyled">
                                                {this.GetCartItems().map((CartItem, index) => (
                                                <li className="mb-3 border-bottom pb-3"><span> {CartItem.Qty} x {CartItem.ProductName} </span> $ {(CartItem.Rate * CartItem.Qty).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</li>
                                                ))}
                                                <li className="mb-3 border-bottom pb-3"><span> Shipping </span> $ 0.00</li>
                                                <li className="mb-3 border-bottom pb-3"><span> Subtotal </span> $ {this.GetCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</li>
                                                <li><span><strong className="cart-total"> Total :</strong></span>  <strong className="cart-total">$ {this.GetCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0).toLocaleString(navigator.language, { minimumFractionDigits: 0 })} </strong>
                                                </li>
                                            </ul>
                                            :  <div>No Items found</div>
                                            }
                                        </div>
                                        <div className="cart-detail my-5">
                                            <h3 className="mb-3">Payment Method</h3>
                                            <div className="form-group">
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor="customRadio1">Direct Bank Tranfer</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor="customRadio2">Check Payment</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor="customRadio3">Paypal Account</label>
                                                </div>
                                            </div>
                                            <div className="form-group mb-0">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label className="custom-control-label" htmlFor="customCheck1">I have read and accept the terms and conditions</label>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary btn-block">Proceed to Payment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
                {/*body content end*/}
            </div>
        );
    }
}

export default Checkout;