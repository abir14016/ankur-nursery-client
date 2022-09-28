import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from '../../hooks/useAdmin';

const MedicinalPlant = ({ medicinalPlant }) => {
    const [user] = useAuthState(auth);
    const [admin] = UseAdmin(user);
    const { _id, name, picture, description, quantity, price } = medicinalPlant;
    const navigate = useNavigate();
    const handleBuy = id => {
        navigate(`/medicinal/${id}`);
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl border-2 mx-auto">
            <figure class="px-10 pt-10">
                <img style={{ width: 400, heigth: 225 }} src={picture} alt="Shoes" class="rounded-xl" />
            </figure>
            <hr />
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p className='text-2xl'>${price}</p>
                <p className='text-1xl'>Available: {quantity}</p>
                <div class="card-actions">
                    {
                        !admin && <button
                            onClick={() => handleBuy(_id)}
                            class="btn btn-primary">
                            Buy Now
                        </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default MedicinalPlant;  