import React from 'react';

import {Link} from 'react-router-dom';
import SignUpAvater from '../../img/sign-up.svg';

import './SignUp.css';

const SignUp = () => {
    return (
        <div className="signUp">
        <div className='row signInArea'>
            <div className="col-12 col-md-4">
                <h4 className='createNewAccount'>Create New Account</h4>
                <h5 className='itsFreeToSignUp'>It's free to signup and only takes a minute.</h5>
                <form action="#" className='signInform'>
                        <div className="inputFields mt-3">
                            <label htmlFor="email">Email address</label>
                            <input type="email" placeholder='yourname@yourmail.com' name="email" id="email" />
                        </div>
                        <div className="inputFields mt-3">
                            <div className="passwordBlock">
                                <label htmlFor="password">Password</label>
                            </div>

                            <input type="password" placeholder='Enter your password' name="password" id="password" />
                        </div>
                        <div className="inputFields mt-3">
                            <div className="passwordBlock">
                                <label htmlFor="firstName">First Name</label>
                            </div>

                            <input type="password" placeholder='Enter your First name' name="password" id="firstName" />
                        </div>
                        <div className="inputFields mt-3">
                            <div className="passwordBlock">
                                <label htmlFor="lastName">Last Name</label>
                            </div>

                            <input type="password" placeholder='Enter your Last name' name="password" id="lastName" />
                        </div>
                        <div className="inputFields mt-3">
                            <p className='tosAggrement'>By clicking <b>Create an account</b> below, you agree to our terms of service and privacy statement.</p>
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
                            <p>Already have an account? <Link to="/signin">Sign in</Link></p>

                        </div>
                    </form>
            </div>
            <div className="col-8 signupAvatarArea">
                <img src={SignUpAvater} alt="sign up image here" className='signupAvatar img-fluid'/>
            </div>
            </div>
            
        </div>
    );
};

export default SignUp;