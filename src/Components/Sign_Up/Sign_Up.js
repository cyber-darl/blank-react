import React, { useState } from 'react';
import './Sign_Up.css';
import { Link, useNavigate } from 'react-router-dom';

const Sign_Up = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');

    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    phone,
                }),
            });

            const json = await response.json();
            console.log('Server response:', json);

            if (response.ok && json.authtoken) {
                // Save token and user data in sessionStorage
                sessionStorage.setItem('auth-token', json.authtoken);
                sessionStorage.setItem('name', name);
                sessionStorage.setItem('phone', phone);
                sessionStorage.setItem('email', email);

                // Navigate to the desired page after successful signup
                navigate('/');
            } else {
                // Handle errors from the backend
                if (json.errors) {
                    setShowerr(json.errors.map((error) => error.msg).join(', '));
                } else {
                    setShowerr(json.error || 'Signup failed. Please try again.');
                }
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setShowerr('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <div className="container" style={{ marginTop: '5%' }}>
            <div className="signup-grid">
                <div className="signup-form">
                    <form method="POST" onSubmit={register}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                value={name}
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Emaill</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="tel"
                                name="phone"
                                id="phone"
                                className="form-control"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                id="password"
                                type="password"
                                className="form-control"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                        <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sign_Up;
