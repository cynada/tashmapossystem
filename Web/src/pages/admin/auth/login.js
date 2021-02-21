import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { CommonGet, CommonPost, CommonDeleteById } from "../../../config";
import Swal from "sweetalert2";
import LOGO from "../../../assets/images/tashmalogo.jpg"; //  assets/images/PLk.jpg';
import Loader from "react-loader-spinner";

class Login extends Component {
  state = {
    email: "",
    password: "",
    token: "",
    isloader: false,
  };

  constructor(props) {
    super(props);
  }
  componentWillMount() {
    sessionStorage.clear();
  }
  //on key press['ENTER']
  loginKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("ENT");
      this.login();
    }
  };

  login = () => {
    console.log("login ");
    // this.setState({
    //   isloader: true,
    // });
    // var
    let formdata = {
      epfnumber: this.state.email,
      password: this.state.password,
    };
    console.log(formdata);

    CommonPost("users/signin", formdata)
      .then((res) => res.json())
      .then((json) => {
        // sessionStorage.setItem("token", json.token);
        // this.setState({
        //   token: json.token,
        //   isloader: false,
        // });
        console.log(json)
        // //window.location.reload();
        if (json.login === false) {
          Swal.fire("Invalid Credentials!");
          console.log("NOT LOGGEDIN!");
          this.setState({
            isloader: false,
          });
        }
       else if (json.login === true && json.isAdmin===true) {
          this.setState({
            isloader: false,
          });
          Swal.fire({
            position: "center",
            //icon: 'success',
            title: "Welcome Admin!",
            showConfirmButton: false,
            timer: 1500,
          });
          
          console.log("LOGGEDIN!");
          this.props.history.push("/admin-vieworders");
        }
        else if (json.login === true && !json.isAdmin) {
          this.setState({
            isloader: false,
          });
          Swal.fire({
            position: "center",
            //icon: 'success',
            title: "Welcome User!",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log("LOGGEDIN!");
          this.props.history.push("/user-addorder");
        }
      })
  };

  render() {
    return (
      <div className="page-content">
        {/*login start*/}
        <section>
          <Container>
            <Row className="justify-content-center">
              <Col className="col-5">
                <div>
                  <img src={LOGO} style={{ width: "100%", height: "40vh" }} />
                </div>
                <h2 className="text-center mb-3">
                  <strong>Sign In</strong>
                </h2>
                <form>
                  <div className="messages" />
                  <div className="form-group">
                    <label>User Name</label>
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                      className="form-control"
                      placeholder="User name"
                      required="required"
                      data-error="Username is required."
                      onKeyPress={(e) => this.loginKeyPress(e)}
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      id="form_password"
                      type="password"
                      value={this.state.password}
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      required="required"
                      data-error="password is required."
                      onKeyPress={(e) => this.loginKeyPress(e)}
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group mt-4 mb-5">
                    <div className="remember-checkbox d-flex align-items-center justify-content-between">
                      {/* <div className="checkbox">
                                <input type="checkbox" id="check2" name="check2" />
                                <label htmlFor="check2">Remember me</label>
                            </div> */}
                      {/* <Link to="/forgot-password">Forgot Password?</Link> */}
                    </div>
                  </div>

                  <div className="text-center mb-3">
                    <Loader
                      type="ThreeDots"
                      color="#00BFFF"
                      height={50}
                      width={50}
                      visible={this.state.isloader} //3 secs
                    />
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.login}
                    >
                      Login
                    </button>
                  </div>
                  {/* <Button className="btn btn-primary" onClick={this.login}> Login Now</Button> */}
                </form>
                {/* <div className="d-flex align-items-center text-center justify-content-center mt-4">
                    <span className="text-muted mr-1">Don't have an account?</span>
                    <Link to="/sign-up">Sign Up</Link>
                </div> */}
              </Col>
            </Row>
          </Container>
        </section>
        {/*login end*/}
      </div>
    );
  }
}

export default Login;
