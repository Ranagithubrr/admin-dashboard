import React from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';


import LoginProfile from '../../img/loginProfileAvatar.svg';

const SignIn = () => {
    return (
        <div className='signIn'>
            <div className="row signInArea">
                <div className="col-8 signupformLeft">
                    <img src={LoginProfile} alt="loginProfile" className='userProfileImage' />
                </div>
                <div className="col-12 col-md-4 signInformRight">
                    <h3 className='signin'>Sign In</h3>
                    <h5 className='welcomeback'>Welcome back! Please signin to continue.</h5>
                    <form action="#" className='signInform'>
                        <div className="inputFields mt-3">
                            <label htmlFor="email">Email address</label>
                            <input type="email" placeholder='yourname@yourmail.com' name="email" id="email" />
                        </div>
                        <div className="inputFields mt-3">
                            <div className="passwordBlock">
                                <label htmlFor="password">Password</label>
                                <Link to="#">Forgot password?</Link>
                            </div>

                            <input type="password" placeholder='Enter your password' name="password" id="password" />
                        </div>
                        <div className="inputFields mt-3">
                            <button type="submit" className='signInBtn'>Sign In</button>
                        </div>
                        <div className="inputFields orDivider">
                            <span className='mx-2'>or</span>
                        </div>
                        <div className="inputFields">
                            <button type="submit" className='signInFB'>Sign up with facebook</button>
                        </div>
                        <div className="inputFields">
                            <button type="submit" className='signInTW'>Sign up with Twitter</button>
                        </div>
                        <div className="inputFields dontHaveAccount">
                            <p>Don't have an account? <Link to="/signup">Create an Account</Link></p>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;