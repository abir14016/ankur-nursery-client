import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        eUser,
        eLoading,
        eError,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (eUser) {
        console.log(eUser)
    }
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div>
            <h1 className='text-5xl text-center my-10'>Register Now</h1>
            <div className='flex justify-center items-center'>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                class="input input-bordered"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'name is required'
                                    }
                                })}
                            />
                            {errors.name?.type === 'required' && <p className="text-error label-text-alt font-semibold">
                                {errors.name.message}
                            </p>}
                        </div>

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
                                <Link to="/login" class="label-text-alt link link-hover">Already have an account? Plz login</Link>
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
                                // onClick={() => createUserWithEmailAndPassword()}
                                class="btn btn-primary">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;