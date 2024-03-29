import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const SingleMedicinalPlant = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [medicinalPlant, setMedicinalPlant] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/medicinal/${id}`)
            .then(res => res.json())
            .then(data => setMedicinalPlant(data))
    }, [id]);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.updatedQuantity = medicinalPlant.quantity - data.quantity;
        data.userName = user.displayName;
        data.email = user.email;
        data.productName = medicinalPlant.name;
        data.subTotal = parseInt(data.quantity) * parseInt(medicinalPlant.price);
        data.price = medicinalPlant.price
        const url = `http://localhost:5000/medicinal/${id}`;
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
                    toast.success("Order Successfull");
                }

            });

        const order = {
            email: data.email,
            userName: data.userName,
            productName: data.productName,
            quantity: data.quantity,
            phone: data.phone,
            address: data.address,
            subTotal: data.subTotal,
            price: data.price
        }

        fetch('http://localhost:5000/order', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset();
                    // toast.success("Order Successfull");
                }

            });
    }

    return (
        <div className='mt-16'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-[25rem] h-[25rem]' src={medicinalPlant.picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{medicinalPlant.name}</h2>
                    <p>{medicinalPlant.description}</p>
                    <div>
                        <p className='text-xs font-semibold text-teal-600'>অবশিষ্ট আছে: {medicinalPlant.quantity} পিস</p>
                        <p className='text-xs font-semibold text-red-600'>মূল্য: {medicinalPlant.price} (প্রতি পিস)</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-center my-5'>
                <div class="card flex-shrink-0 w-full  shadow-2xl bg-base-100 border border-primary">
                    <h1 className='text-center text-3xl text-blue-700 mt-4'>অর্ডার করুণ</h1>
                    <form onSubmit={handleSubmit(onSubmit)} class="card-body">
                        <div className='md:flex justify-around sm:block'>
                            <div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">নাম</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue={user.displayName}
                                        readOnly
                                        class="input input-bordered"
                                    />
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">ইমেইল</span>
                                    </label>
                                    <input
                                        type="email"
                                        defaultValue={user.email}
                                        readOnly
                                        class="input input-bordered"
                                    />
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">পণ্যের নাম</span>
                                    </label>
                                    <input
                                        type="email"
                                        defaultValue={medicinalPlant.name}
                                        readOnly
                                        class="input input-bordered"
                                    />
                                </div>
                            </div>

                            <div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">পণ্যের সংখ্যা</span>
                                    </label>
                                    <input
                                        type="number"
                                        min={1}
                                        max={medicinalPlant.quantity}
                                        class="input input-bordered"
                                        {...register("quantity", {
                                            required: {
                                                value: true,
                                                message: 'provide a quantity'
                                            },
                                            minLength: {
                                                value: 1,
                                                message: 'you must order at least 1 product'
                                            }
                                        })}
                                    />
                                    {errors.quantity?.type === 'required' && <p className="text-error label-text-alt font-semibold">
                                        {errors.quantity.message}
                                    </p>}
                                    {errors.quantity?.type === 'minLength' && <p className="text-error label-text-alt font-semibold">
                                        {errors.quantity.message}
                                    </p>}
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">মোবাইল নাম্বার</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="আপনার মোবাইল নাম্বার"
                                        class="input input-bordered"
                                        {...register("phone", {
                                            required: {
                                                value: true,
                                                message: 'mobile number is required'
                                            },
                                            pattern: {
                                                value: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
                                                message: 'provide a valid mobile number'
                                            }
                                        })}
                                    />
                                    {errors.phone?.type === 'required' && <p className="text-error label-text-alt font-semibold">
                                        {errors.phone.message}
                                    </p>}
                                    {errors.phone?.type === 'pattern' && <p className="text-error label-text-alt font-semibold">
                                        {errors.phone.message}
                                    </p>}
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">ঠিকানা</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="আপনার জেলা"
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
                            </div>
                        </div>

                        <div class="form-control mt-6">
                            <button
                                type='submit'
                                class="btn btn-primary">
                                অর্ডার করুণ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingleMedicinalPlant;