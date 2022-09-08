import React from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import googleLogo from '../../../src/images/social/google-logo.png';
import facebookLogo from '../../../src/images/social/facebook-logo.png';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);

    if (gUser || fUser) {
        console.log(gUser || fUser);
    }

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Login Now</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" class="input input-bordered" />
                            <label class="label">
                                <Link to="/register" class="label-text-alt link link-hover text-blue-800 font-semibold">New user? Register Now</Link>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Login</button>
                        </div>
                    </div>
                    <div>
                        <div className="divider">OR</div>
                        <h3 className='text-center font-bold text-accent'>continue with</h3>
                        <div className='flex justify-center border border-primary mx-10 my-2 rounded-xl py-3'>
                            <button
                                className='btn btn-ghost'
                                onClick={() => signInWithGoogle()} >
                                <img src={googleLogo} alt="googleLogo" />
                            </button>
                            <button
                                className='btn btn-ghost'
                                onClick={() => signInWithFacebook()} >
                                <img src={facebookLogo} alt="facebookLogo" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;