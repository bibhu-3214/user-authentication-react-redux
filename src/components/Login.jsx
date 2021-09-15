import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/actions/usersAction';

const Login = props => {
    const [email, setEmail] = useState('bibhu098@gmail.com');
    const [password, setPassword] = useState('bibhu1920');

    const dispatch = useDispatch();

    const handleChange = e => {
        if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        const formData = { email: email, password: password };
        const redirectToHome = () => {
            props.history.push('/');
            props.handleAuth();
        };
        dispatch(login(formData, redirectToHome));
    };

    return (
        <div className='container text-center'>
            <h1 className='mb-4' style={{ color: '#2962ff' }}>
                Log In
            </h1>
            <form
                className='row g-3 '
                onSubmit={handleSubmit}
                style={{ width: '60%', marginLeft: '25%', textAlign: 'center' }}>
                <div className='col-sm-10 mb-3'>
                    <input
                        className='form-control'
                        type='email'
                        name='email'
                        value={email}
                        placeholder='enter your email'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='col-sm-10 mb-3'>
                    <input
                        className='form-control'
                        type='password'
                        name='password'
                        value={password}
                        placeholder='enter your password'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='col-sm-10'>
                    <input className='btn btn-primary mb-3' value='Login' type='submit' style={{ width: '100%' }} />
                </div>
            </form>
        </div>
    );
};

export default Login;
