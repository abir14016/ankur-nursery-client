import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyReview = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.email = user.email;
        data.userName = user.displayName;
        console.log(data);
        const url = `http://localhost:5000/review/${user?.email}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset();
                    toast.success("Review upload successfull");
                }

            });
    }
    return (
        <div>
            <h4>Update your review</h4>
            <div className='mt-5'>
                <div class="border border-primary rounded-md w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Review</span>
                            </label>
                            <textarea
                                type="text"
                                rows="10"
                                placeholder="your review"
                                class="input h-40 input-bordered"
                                {...register("review", {
                                    required: {
                                        value: true,
                                        message: 'review is required'
                                    }
                                })}
                            />
                            {errors.review?.type === 'required' && <p className="text-error label-text-alt font-semibold">
                                {errors.review.message}
                            </p>}
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="your address"
                                class="input input-bordered"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'address is required'
                                    }
                                })}
                            />
                            {errors.address?.type === 'required' && <p className="text-error label-text-alt font-semibold">
                                {errors.address.message}
                            </p>}
                        </div>

                        <div class="form-control mt-6">
                            <button
                                type='submit'
                                class="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyReview;