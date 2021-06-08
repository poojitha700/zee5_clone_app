import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../firebase";
import { withRouter } from "react-router-dom";
class ForgotPassword extends Component {
  state = {
    email: "",
    loading: false,
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      await firebase.auth().sendPasswordResetEmail(this.state.email);
      let message = "pls check ur registered email and reset ur password";
      toast.success(message);
      this.props.history.push("/");
    } catch (err) {
      toast.error(err.message);
    }
    this.setState({ loading: false, email: "" });
  };
  render() {
    let { email, loading } = this.state;
    return (
      <section id="AuthBlock">
        <article>
          <h2>Forgot Password of ZEE5</h2>
          <p>
            Reset Password with ur registered email to continue enjoying
            uninterrupted video and personalized experience by ZEE5
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <div className="form-group">
                <button>
                  {loading === true ? `loading...` : "Forgot password"}
                </button>
              </div>
            </div>
          </form>
        </article>
      </section>
    );
  }
}

export default withRouter(ForgotPassword);
