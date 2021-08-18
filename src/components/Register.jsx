import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../Redux/actions/usersAction';

const Register = (props) => {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const dispatch = useDispatch();

   const handleChange = (e) => {
      if (e.target.name === 'username') {
         setUsername(e.target.value);
      } else if (e.target.name === 'email') {
         setEmail(e.target.value);
      } else if (e.target.name === 'password') {
         setPassword(e.target.value);
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const formData = { username: username, email: email, password: password };
      const redirectToLogin = () => {
         props.history.push('/login');
      };
      const resetForm = () => {
         setUsername('');
         setEmail('');
         setPassword('');
      };
      dispatch(register(formData, resetForm, redirectToLogin));
   };

   return (
      <div className="container text-center">
         <h1 className="mb-4" style={{ color: '#2962ff' }}>
            Sign Up
         </h1>
         <form
            className="row g-3"
            style={{ width: '60%', marginLeft: '25%', textAlign: 'center' }}
            onSubmit={handleSubmit}
         >
            <div className="col-sm-10 mb-3">
               <input
                  className="form-control"
                  type="text"
                  name="username"
                  value={username}
                  placeholder="enter your name"
                  onChange={handleChange}
               />
            </div>
            <div className="col-sm-10 mb-3">
               <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="enter your email"
                  onChange={handleChange}
               />
            </div>
            <div className="col-sm-10 mb-3">
               <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="enter your password"
                  onChange={handleChange}
               />
            </div>
            <div className="col-sm-10">
               <input
                  className="btn btn-primary mb-3"
                  value="Register"
                  type="submit"
                  style={{ width: '100%' }}
               />
            </div>
         </form>
      </div>
   );
};

export default Register;
