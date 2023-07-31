import React from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
const Signup = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200 rounded-lg mb-2">
            <div className="hero-content  flex-col lg:flex-row">
                <div className="w-1/2 me-4">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className='flex justify-center'><h1 className="text-3xl font-bold">Signup</h1></div>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type='password' name='password' placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Signup" />
                            </div>
                        </form>
                        <p className='text-center my-4'>Already Have an Account to Car Doctor? <Link to='/login' className='text-orange-600 font-bold'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;