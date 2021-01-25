import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pageheading from '../../../widgets/Pageheading';

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.GetCartItems = this.GetCartItems.bind(this);
  }
  GetCartItems() {
    return JSON.parse(localStorage.getItem("CartProduct"));
  }
  RemoveItem = (Index) => {
    var CartValue = JSON.parse(localStorage.getItem("CartProduct"));
    CartValue = CartValue.slice(0, Index).concat(CartValue.slice(Index + 1, CartValue.length));
    localStorage.removeItem("CartProduct");
    localStorage.setItem("CartProduct", JSON.stringify(CartValue));
  }

  AddQty = (Index) => {
    var CartValue = JSON.parse(localStorage.getItem("CartProduct"));
    CartValue[Index].Qty = parseInt(CartValue[Index].Qty + 1);
    localStorage.removeItem("CartProduct");
    localStorage.setItem("CartProduct", JSON.stringify(CartValue));
  }

  RemoveQty = (Index) => {
    var CartValue = JSON.parse(localStorage.getItem("CartProduct"));

    if (CartValue[Index].Qty != 1) {

      CartValue[Index].Qty = parseInt(CartValue[Index].Qty - 1);
      localStorage.removeItem("CartProduct");
      localStorage.setItem("CartProduct", JSON.stringify(CartValue));
    } else {
      this.RemoveItem(Index);
    }
  }

  render() {
    return (
      <div>
        {/*hero section start*/}
        <section className="position-relative">
        <Pageheading foldername={"Shop"} title={"Product Cart"} />
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          <section>
            <div className="container">
              {(this.GetCartItems() != null && this.GetCartItems().length > 0) ?
                <div>
                  <div className="table-responsive">
                    <table className="cart-table table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Product</th>
                          <th scope="col">Price</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Total</th>
                          <th scope="col">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.GetCartItems().map((CartItem, index) => (
                          <tr>
                            <td>
                              <div className="media align-items-center">
                                <Link to="/">
                                  <img className="img-fluid rounded box-shadow" src={require(`../../../assets/images/${CartItem.ProductImage}`)} alt="" />
                                </Link>
                                <div className="media-body">
                                  <p>{CartItem.ProductName}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <h5 className="mb-0">
                                ${CartItem.Rate.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                              </h5>
                            </td>
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <Link className="btn-product btn-product-up" onClick={() => this.RemoveQty(index)}> <i className="ti-minus" />
                                </Link>
                                <input className="form-product" type="number" name="form-product" value={CartItem.Qty} />
                                <Link className="btn-product btn-product-down" onClick={() => this.AddQty(index)}> <i className="ti-plus" />
                                </Link>
                              </div>
                            </td>
                            <td>
                              <h5 className="mb-0">
                                ${(CartItem.Rate * CartItem.Qty).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                              </h5>
                            </td>
                            <td>
                              <Link type="submit" className="btn btn-primary btn-sm" onClick={() => this.RemoveItem(index)}><i className="ti-close" />
                              </Link>
                            </td>
                          </tr>
                        ))}

                      </tbody>
                    </table>
                  </div>
                  <div className="row mt-8">
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-md-12">
                          <label className="text-black h4" htmlFor="coupon">Coupon</label>
                          <p>Enter your coupon code if you have one.</p>
                        </div>
                        <div className="col-md-8 mb-3 mb-md-0">
                          <input className="form-control py-3" id="coupon" placeholder="Coupon Code" type="text" />
                        </div>
                        <div className="col-md-4">
                          <button className="btn btn-primary btn-sm px-4">Apply Coupon</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 pl-5 mt-5 mt-lg-0">
                      <div className="row justify-content-end">
                        <div className="col-md-7">
                          <div className="row">
                            <div className="col-md-12 text-right border-bottom mb-5">
                              <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-md-6">
                              <span className="text-black">Subtotal</span>
                            </div>
                            <div className="col-md-6 text-right">
                              <strong className="text-black">${this.GetCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0).toLocaleString(navigator.language, { minimumFractionDigits: 0 })} </strong>
                            </div>
                          </div>
                          <div className="row mb-5">
                            <div className="col-md-6">
                              <span className="text-black">Total</span>
                            </div>
                            <div className="col-md-6 text-right">
                              <strong className="text-black">${this.GetCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0).toLocaleString(navigator.language, { minimumFractionDigits: 0 })} </strong>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <Link className="btn btn-primary btn-md btn-block" to="/checkout">Proceed To Checkout</Link>
                              <Link className="btn btn-outline-primary btn-md btn-block" to="/product-grid">Continue Shopping</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                :
                <div className="row">
                  <div className="col-md-12 text-center pb-11">
                    <h3 className="mb-4">Your cart is Currently Empty.</h3>
                    <Link className="btn btn-primary mr-3" to="/">Homes</Link>
                    <Link className="btn btn-primary" to="/product-grid">Continue Shoppings</Link>
                  </div>
                </div>
              }
            </div>
          </section>
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default Cart;