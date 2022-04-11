import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import google from '../../images/google.svg'

const Shipment = () => {
    const [user] = useAuthState(auth);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleNameBlur = event => {
        setName(event.target.value)
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipment = { name, email, address, phone }
        console.log(shipment)
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="1" autoComplete="on" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="5" autoComplete="on" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="2" autoComplete="on" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="text" name="phone" id="3" autoComplete="on" required />
                    </div>
                    <p style={{ color: "red" }}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>

            </div>
        </div>
    );
};

export default Shipment;