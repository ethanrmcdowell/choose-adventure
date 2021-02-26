import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            errors: {}
        }
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
    if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }
    onSubmit = e => {
        e.preventDefault();

        const userData = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.loginUser(userData);
    }
    render() {
        const { errors } = this.state;
        return (
            <div style={{
                backgroundColor: "white",
                width: "300px"
            }} className="container">
                <div className="row">
                    <div className="col">
                        <Link to="/">
                            <p>Back home</p>
                        </Link>
                        <div className="col">
                            <h4>Login below</h4>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col">
                                <input 
                                    onChange={this.onChange}
                                    value={this.state.username}
                                    error={errors.username}
                                    id='username'
                                    type='username'
                                    className={classnames("", {
                                        invalid: errors.username || errors.usernamenotfound
                                    })}
                                />
                                    <label htmlFor='username'>Username</label>
                                    <span className="red-text">
                                        {errors.username}
                                        {errors.usernamenotfound}
                                    </span>
                            </div>
                            <div className="input-field col">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.password || errors.passwordincorrect
                                    })}
                                />
                                <label htmlFor="password">Password</label>
                                <span className="red-text">
                                    {errors.password}
                                    {errors.passwordincorrect}
                                </span>
                            </div>
                            <div className="col">
                                <button
                                    style={{
                                        width: '150px',
                                        borderRadius: '3px',
                                        letterSpacing: '1.5px',
                                        marginTop: '1rem'
                                    }}
                                    type='submit'
                                    className='btn'
                                >
                                Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { loginUser }
  )(Login);