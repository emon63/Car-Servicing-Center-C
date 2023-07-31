import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Checkout = () => {
    const service = useLoaderData();
    const { title, price, _id, img } = service;
    const { user } = useContext(AuthContext);
    const handleBookService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.Name.value;
        const email = form.Email.value;
        const date = form.Date.value;

        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price,
        }

        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('service booked successfully')
                }
            })

    }
    return (
        <div>
            <h4 className='text-center text-3xl'>Service Details for : {title}</h4>
            <form onSubmit={handleBookService}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='Name' placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='Date' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='Email' defaultValue={user?.email} placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" name='DueAmount' defaultValue={price} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="ORDER CONFIRM" />
                </div>

            </form>
        </div>
    );
};

export default Checkout; <h4>this is for checkout page</h4>