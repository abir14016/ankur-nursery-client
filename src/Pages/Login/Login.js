import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import googleLogo from '../../../src/images/social/google-logo.png';
import facebookLogo from '../../../src/images/social/facebook-logo.png';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);

    const [
        signInWithEmailAndPassword,
        eUser,
        eLoading,
        eError,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (gUser || fUser || eUser) {
        navigate(from, { replace: true });
    }

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Login Now</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                class="input input-bordered"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'provide a valid email'
                                    }
                                })}
                            />
                            {errors.email?.type === 'required' && <p className="text-error label-text-alt font-semibold">
                                {errors.email.message}
                            </p>}
                            {errors.email?.type === 'pattern' && <p className="text-error label-text-alt font-semibold">
                                {errors.email.message}
                            </p>}
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                class="input input-bordered"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                        message: 'password must contain at least one number and letter'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'password must be 8 character or longer'
                                    }
                                })}
                            />
                            {errors.password?.type === 'required' && <p className="text-error label-text-alt font-semibold">
                                {errors.password.message}
                            </p>}
                            {errors.password?.type === 'pattern' && <p className="text-error label-text-alt font-semibold">
                                {errors.password.message}
                            </p>}
                            {errors.password?.type === 'minLength' && <p className="text-error label-text-alt font-semibold">
                                {errors.password.message}
                            </p>}
                            <label class="label">
                                <Link to="/register" class="label-text-alt link link-hover">New user? Plz register</Link>
                            </label>
                        </div>
                        {
                            (eLoading) && <Loading></Loading>
                        }
                        {
                            eError && <h6 className='text-error label-text-alt font-semibold'>{eError.message}</h6>
                        }
                        <div class="form-control mt-6">
                            <button
                                type='submit'
                                class="btn btn-primary">
                                Login
                            </button>
                        </div>
                    </form>
                    <div>
                        <div className="divider">OR</div>
                        {
                            (gLoading || fLoading) && <Loading></Loading>
                        }
                        {
                            gError && <h6 className='text-error text-center label-text-alt font-semibold'>{gError.message}</h6>
                        }
                        {
                            fError && <h6 className='text-error text-center label-text-alt font-semibold'>{fError.message}</h6>
                        }
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