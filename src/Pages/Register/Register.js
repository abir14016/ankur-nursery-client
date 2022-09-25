import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
    if (eUser) {
        const currentUser = {
            email: eUser.user?.email,
            name: eUser.user?.displayName,
            image: eUser.user?.photoURL
        }
        const url = `http://localhost:5000/user/${eUser.user?.email}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset();
                    // toast.success("regestration successfull");
                }

            });
        setTimeout(() => {
            navigate('/');
        }, 2000)
    }
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [updateProfile, updating] = useUpdateProfile(auth);

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name, photoURL: data.photoUrl });
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
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Photo</span>
                            </label>
                            <input
                                type="text"
                                placeholder="your image url"
                                class="input input-bordered"
                                {...register("photoUrl", {
                                    required: {
                                        value: true,
                                        message: 'image is required'
                                    }
                                })}
                            />
                            {errors.photoUrl?.type === 'required' && <p className="text-error label-text-alt font-semibold">
                                {errors.photoUrl.message}
                            </p>}
                        </div>

                        <label class="label">
                            <Link to="/login" class="label-text-alt link link-hover">Already have an account? Plz login</Link>
                        </label>

                        {
                            (eLoading) && <Loading></Loading>
                        }
                        {
                            (updating) && <Loading></Loading>
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