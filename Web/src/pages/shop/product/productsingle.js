import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { Row, Col, Container, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import OwlCarousel from 'react-owl-carousel';
import Pageheading from '../../../widgets/Pageheading';
window.fn = OwlCarousel;


class ProductSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductList: this.props.products,
      ActiveProductID: parseInt(this.props.match.params.id),
      SelectedProduct: null,
      SelectedTab: '1'
    }
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    let ActiveProduct = this.state.ActiveProductID;
    let ProductList = this.state.ProductList;
    if (ProductList && ProductList.length > 0) {
      ProductList.map((product) => {
        if (product.id === ActiveProduct) {
          this.setState({
            ...this.state,
            SelectedProduct: product
          })
        }
      })
    }
  }
  AddToCart(ProductID, ProductName, ProductImage, Qty, Rate, StockStatus) {
    var Cart = JSON.parse(localStorage.getItem("CartProduct"));
    if (Cart == null)
      Cart = new Array();
    let selectedProduct = Cart.find(product => product.ProductID === ProductID);
    if (selectedProduct == null) {
      Cart.push({ ProductID: ProductID, ProductName: ProductName, ProductImage: ProductImage, Qty: Qty, Rate: Rate, StockStatus: StockStatus });
      localStorage.removeItem("CartProduct");
      localStorage.setItem("CartProduct", JSON.stringify(Cart));
      var flag = 0;
      if (flag == 0) {
        toast.success("Item Added to Cart");
        flag = 1;
      }
    }
    else {
      toast.warning("Item is already in Cart");
    }
  }
  AddToWishList(ProductID, ProductName, ProductImage, Qty, Rate, StockStatus) {
    var Cart = JSON.parse(localStorage.getItem("WishlistProduct"));
    if (Cart == null)
      Cart = new Array();

    let selectedProduct = Cart.find(product => product.ProductID === ProductID);
    if (selectedProduct == null) {

      Cart.push({ ProductID: ProductID, ProductName: ProductName, ProductImage: ProductImage, Qty: Qty, Rate: Rate, StockStatus: StockStatus });
      localStorage.removeItem("WishlistProduct");
      localStorage.setItem("WishlistProduct", JSON.stringify(Cart));

      toast.success("Item Added to WishList");
    }
    else {
      toast.warning("Item is already in WishList");
    }


  }
  CheckCardItem(ID) {
    let checkcart = false;
    var Cart = JSON.parse(localStorage.getItem("CartProduct"));
    if (Cart && Cart.length > 0) {
      for (const cartItem of Cart) {
        if (cartItem.ProductID === ID) {
          checkcart = true
        }
      }
    }
    return checkcart;
  }
  CheckWishList(ID) {
    let wishlist = false;
    var Wish = JSON.parse(localStorage.getItem("WishlistProduct"));

    if (Wish && Wish.length > 0) {
      for (const wishItem of Wish) {
        if (wishItem.ProductID === ID) {
          wishlist = true
        }
      }
    }
    return wishlist;
  }
  toggle(tab) {
    if (this.state.SelectedTab !== tab) {
      this.setState({
        SelectedTab: tab
      });
    }
  }
  render() {
    const { ProductList, SelectedProduct } = this.state;
    let rat = [];
    if (SelectedProduct !== null) {
      let rating = SelectedProduct.rating;
      let i = 1;
      while (i <= 5) {
        if (i <= rating) {
          rat.push(<i className="ti-star" style={{ color: 'gold' }} ></i>)
        }
        else {
          rat.push(<i className="ti-star" style={{ color: 'burlywood' }} ></i>)
        }
        i += 1;
      };
    }
    return (
      <div>
        {/*hero section start*/}
        <section className="position-relative">
        <Pageheading foldername={"Shop"} title={"Product single"} />
          
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        {(SelectedProduct !== null) ?
          <div className="page-content">
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6 sm-mt-5">
                    <OwlCarousel
                      className="owl-carousel"
                      id="imageGallery"
                      dotData={true}
                      items={1}
                      autoplay={true}
                    >
                      {SelectedProduct.pictures.map((image, index) => {
                        return (
                          <div className="item" key={index}>
                            <img className="img-fluid w-100" src={require(`../../../assets/images/${image}`)} alt="" />
                          </div>
                        )
                      })}
                    </OwlCarousel>
                  </div>
                  <div className="col-lg-6 col-md-6 mt-5 mt-lg-0">
                    <div className="product-details">
                      <h4>{SelectedProduct.name}</h4>
                      <div className="product-price my-4"> <span className="d-block">${SelectedProduct.price}  <del>${SelectedProduct.salePrice}</del></span>
                        <span className="text-primary">
                          {rat}
                        </span>
                      </div>
                      <ul className="list-unstyled mb-4">
                        <li className="mb-2"><span className="text-black"> Availibility: </span> In Stock</li>
                        <li><span className="text-black"> Categories :</span> {SelectedProduct.category}</li>
                      </ul>
                      <p>{SelectedProduct.description}</p>
                      <div className="row my-4">
                        <div className="col-sm-2">
                          <ul className="list-unstyled">
                            <li>
                              <h6 className="mb-2 text-black">Size</h6>
                              <span>
                                <select className="form-control">
                                  {SelectedProduct.size.map((sizes, index) => {
                                    return (<option key={index}>{sizes}</option>)
                                  }
                                  )}
                                </select>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-10 xs-mt-3">
                          <div className="filter-color">
                            <h4>Color</h4>
                            <ul className="list-inline">
                              {SelectedProduct.colors.map((color, index) => {
                                return (
                                  <li key={index}>
                                    <div className="form-check pl-0">
                                      <input type="checkbox" value={color} className="form-check-input" />
                                      <label className="form-check-label" style={{ background: color }} />
                                    </div>
                                  </li>
                                )
                              }
                              )}

                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <button className="btn-product btn-product-up"> <i className="ti-minus" />
                        </button>
                        <input className="form-product" type="number" name="form-product" defaultValue={1} />
                        <button className="btn-product btn-product-down"> <i className="ti-plus" />
                        </button>
                      </div>
                      <div className="d-flex align-items-center mt-5">
                        {!this.CheckCardItem(SelectedProduct.id) ?
                          <Link to="#" onClick={() => this.AddToCart(SelectedProduct.id, SelectedProduct.name, SelectedProduct.pictures[0], 1, SelectedProduct.salePrice, "In Stock")} className="btn btn-primary mr-4 add-cart " rel="nofollow"><i className="ti-bag mr-2" />Add to
                          cart</Link>
                          :
                          <Link to="/cart" className="btn btn-primary mr-4 add-cart" rel="nofollow"><i className="ti-bag mr-2" />View Cart</Link>
                        }
                        <div className="product-link">
                          {!this.CheckWishList(SelectedProduct.id) ?
                            <Link to="#" onClick={() => this.AddToWishList(SelectedProduct.id, SelectedProduct.name, SelectedProduct.pictures[0], 1, SelectedProduct.salePrice, "In Stock")} className="wishlist-btn" data-toggle="tooltip" data-original-title="Wishlist" data-placement="top"><i className="ti-heart" /></Link>
                            :
                            <Link to="#" className="wishlist-btn"><i className="ti-heart" /></Link>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*tab start*/}
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="tab">
                      <Nav tabs className="border-0">
                        <NavItem active>
                          <NavLink className={classnames({ active: this.state.SelectedTab === '1' })} onClick={() => { this.toggle('1'); }} >Description</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink className={classnames({ active: this.state.SelectedTab === '2' })} onClick={() => { this.toggle('2'); }}>Additional information</NavLink>
                        </NavItem>
                        <NavItem disabled>
                          <NavLink className={classnames({ active: this.state.SelectedTab === '3' })} onClick={() => { this.toggle('3'); }}>Reviews (2)</NavLink>
                        </NavItem>
                      </Nav>
                      {/* Tab panes */}
                      <TabContent activeTab={this.state.SelectedTab} className="pt-5">
                        <TabPane tabId="1" className="fade show" active>
                          <h5 className="mb-3">Product Description</h5>
                          <p className="lead mb-0">ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat Praesent pharetra, justo ut scelerisque mattis, leo quam aliquet diam, congue laoreet elit metus eget diam. Proin ac metus diam. In quis scelerisque velit. Proin pellentesque neque ut scelerisque dapibus. Praesent elementum feugiat dignissim. Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque mattis, leo quam aliquet diam, nisi interdum mollis. Praesent pharetra, justo ut scelerisque mattis, leo quam aliquet diam.</p>
                        </TabPane>
                        <TabPane tabId="2" className="fade show">
                          <h5 className="mb-3">Additional information</h5>
                          <table className="table table-bordered mb-0">
                            <tbody>
                              <tr>
                                <td>Size</td>
                                <td>Small, Medium, Large &amp; Extra Large</td>
                              </tr>
                              <tr>
                                <td>Color</td>
                                <td>Read, Blue, Green &amp; Black</td>
                              </tr>
                              <tr>
                                <td>Chest</td>
                                <td>38 inches</td>
                              </tr>
                              <tr>
                                <td>Waist</td>
                                <td>20 cm</td>
                              </tr>
                              <tr>
                                <td>Length</td>
                                <td>35 cm</td>
                              </tr>
                              <tr>
                                <td>Fabric</td>
                                <td>Cotton, Silk &amp; Synthetic</td>
                              </tr>
                              <tr>
                                <td>Warranty</td>
                                <td>6 Months</td>
                              </tr>
                            </tbody>
                          </table>
                        </TabPane>
                        <TabPane tabId="3" className="fade show">
                          <div className="row">
                            <div className="col-md-7">
                              <div className="row total-rating">
                                <div className="col-md-6">
                                  <div className="bg-light shadow-sm text-center p-5">
                                    <h5>Overall</h5>
                                    <h4>4.0</h4>
                                    <h6>(03 Reviews)</h6>
                                  </div>
                                </div>
                                <div className="col-md-6 mt-3 mt-lg-0">
                                  <div className="rating-list">
                                    <h5>Based on 3 Reviews</h5>
                                    <ul className="list-unstyled">
                                      <li> <Link to="/">5 Star
                                         <i className="ti-star" style={{ color: 'gold' }} />
                                         <i className="ti-star" style={{ color: 'gold' }} />
                                         <i className="ti-star" style={{ color: 'gold' }} />
                                         <i className="ti-star" style={{ color: 'gold' }} />
                                         <i className="ti-star" style={{ color: 'gold' }} /> 01</Link>
                                      </li>
                                      <li> <Link to="/">4 Star
                                         <i className="ti-star" style={{ color: 'gold' }} />
                                         <i className="ti-star" style={{ color: 'gold' }} />
                                         <i className="ti-star" style={{ color: 'gold' }} />
                                         <i className="ti-star" style={{ color: 'gold' }} />
                                         <i className="ti-star" style={{ color: 'burlywood' }} /> 01</Link>
                                      </li>
                                      <li> <Link to="/">3 Star
                                         <i className="ti-star" style={{ color: 'gold' }} />
                                     <i className="ti-star" style={{ color: 'gold' }} />
                                     <i className="ti-star" style={{ color: 'gold' }} />
                                        <i className="ti-star" style={{ color: 'burlywood' }} />
                                        <i className="ti-star" style={{ color: 'burlywood' }} /> 01</Link>
                                      </li>
                                      <li> <Link to="/">2 Star
                                          <i className="ti-star" style={{ color: 'gold' }} />
                                      <i className="ti-star" style={{ color: 'gold' }} />
                                        <i className="ti-star" style={{ color: 'burlywood' }} />
                                        <i className="ti-star" style={{ color: 'burlywood' }} />
                                        <i className="ti-star" style={{ color: 'burlywood' }} /> 01</Link>
                                      </li>
                                      <li> <Link to="/">1 Star
                                      <i className="ti-star" style={{ color: 'gold' }} />
                                        <i className="ti-star" style={{ color: 'burlywood' }} />
                                        <i className="ti-star" style={{ color: 'burlywood' }} />
                                        <i className="ti-star" style={{ color: 'burlywood' }} />
                                        <i className="ti-star" style={{ color: 'burlywood' }} /> 01</Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="media-holder review-list mt-5">
                                <div className="media">
                                  <img className="img-fluid rounded mr-3" alt="image" src={require(`../../../assets/images/product-thumb/01.jpg`)}  />
                                  <div className="media-body">
                                    <h6>Ben Miller</h6>
                                    <p>Seuismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et tantas semper delicatissimi.</p> <span className="text-primary">
                                     <i className="ti-star" style={{ color: 'gold' }} />
                                     <i className="ti-star" style={{ color: 'gold' }} />
                                     <i className="ti-star" style={{ color: 'gold' }} />
                                      <i className="ti-star" style={{ color: 'burlywood' }} />
                                      <i className="ti-star" style={{ color: 'burlywood' }} />
                                    </span>
                                  </div>
                                </div>
                                <div className="media mt-5">
                                  <img className="img-fluid rounded mr-3" alt="image" src={require(`../../../assets/images/product-thumb/02.jpg`)}  />
                                  <div className="media-body">
                                    <h6>Sasha James</h6>
                                    <p>Seuismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et tantas semper delicatissimi.</p> <span className="text-primary">
                                   <i className="ti-star" style={{ color: 'gold' }} />
                                   <i className="ti-star" style={{ color: 'gold' }} />
                                   <i className="ti-star" style={{ color: 'gold' }} />
                                   <i className="ti-star" style={{ color: 'gold' }} />
                                      <i className="ti-star" style={{ color: 'burlywood' }} />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="post-comments mt-5 pos-r">
                                <div className="section-title mb-3">
                                  <h5>Add REVIEW</h5>
                                </div>
                                <form id="contact-form" method="post" action="contact.php">
                                  <div className="messages" />
                                  <div className="form-group">
                                    <input id="form_name" type="text" name="name" className="form-control" placeholder="Name" required="required" data-error="Name is required." />
                                    <div className="help-block with-errors" />
                                  </div>
                                  <div className="form-group">
                                    <input id="form_email" type="email" name="email" className="form-control" placeholder="Email Address" required="required" data-error="Valid email is required." />
                                    <div className="help-block with-errors" />
                                  </div>
                                  <div className="form-group clearfix">
                                    <select className="form-control">
                                      <option value>Rating -- Select</option>
                                      <option value={1}>1</option>
                                      <option value={2}>2</option>
                                      <option value={3}>3</option>
                                      <option value={4}>4</option>
                                      <option value={5}>5</option>
                                    </select>
                                  </div>
                                  <div className="form-group">
                                    <input id="form_number" type="text" name="name" className="form-control" placeholder="Phone Number" required="required" />
                                  </div>
                                  <div className="form-group">
                                    <textarea id="form_message" name="message" className="form-control" placeholder="Type Comment" rows={4} required="required" data-error="Please,leave us a message." defaultValue={""} />
                                    <div className="help-block with-errors" />
                                  </div>
                                  <button className="btn btn-primary mt-3">Post Comment</button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </TabPane>
                      </TabContent>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*tab end*/}
          </div>
          : null}
        {/*body content end*/}
      </div>
    );
  }
}

const ProductStatetoProps = state => {
  return {
    products: state.data.products
  };
};

export default connect(ProductStatetoProps)(withRouter(ProductSingle));