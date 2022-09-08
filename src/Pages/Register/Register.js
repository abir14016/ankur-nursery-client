import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h1 className='text-5xl text-center my-10'>Register Now</h1>
            <div className='flex justify-center items-center'>
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
                                <Link to="/login" class="label-text-alt link link-hover">Already have an account? Plz login</Link>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;