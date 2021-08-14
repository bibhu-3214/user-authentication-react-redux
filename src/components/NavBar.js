import React from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Account from './Account';
import NotesContainer from './My Notes/NotesContainer';

const NavBar = (props) => {
   const { isLoggedIn, handleAuth } = props;
   return (
      <div>
         <h1
            className="display-5 mb-3 text-center text-primary"
            style={{ fontWeight: 'lighter' }}
         >
            USER AUTHENTICATION
            <hr style={{ width: '50%', marginLeft: '25%' }} />
         </h1>

         <ul
            className="nav mb-3 text-center"
            style={{
               width: '60%',
               textAlign: 'center',
               marginLeft: '20%',
               justifyContent: 'space-between',
               display: 'flex',
               flexDirection: 'row',
            }}
         >
            <li className="nav-item">
               <Link
                  to="/"
                  className="nav-link text-danger"
                  style={{
                     fontSize: '30px',
                     textTransform: 'capitalize',
                  }}
               >
                  Home
               </Link>
            </li>
            {isLoggedIn ? (
               <>
                  <li className="nav-item">
                     <Link
                        to="/account"
                        className="nav-link text-danger"
                        style={{
                           fontSize: '30px',
                           textTransform: 'capitalize',
                        }}
                     >
                        Account
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link
                        to="/mynotes"
                        className="nav-link text-danger"
                        style={{
                           fontSize: '30px',
                           textTransform: 'capitalize',
                        }}
                     >
                        My Notes
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link
                        to=""
                        className="nav-link text-danger"
                        style={{
                           fontSize: '30px',
                           textTransform: 'capitalize',
                        }}
                        onClick={() => {
                           localStorage.removeItem('token');
                           alert('successfully logged out');
                           handleAuth();
                           props.history.push('/');
                        }}
                     >
                        Log Out
                     </Link>
                  </li>
               </>
            ) : (
               <>
                  <li className="nav-item">
                     <Link
                        to="/register"
                        className="nav-link text-danger"
                        style={{
                           fontSize: '30px',
                           textTransform: 'capitalize',
                        }}
                     >
                        Register
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link
                        to="/Login"
                        className="nav-link text-danger"
                        style={{
                           fontSize: '30px',
                           textTransform: 'capitalize',
                        }}
                     >
                        Login
                     </Link>
                  </li>
               </>
            )}
         </ul>
         <hr style={{ width: '70%', marginLeft: '15%' }} />

         <Switch>
            <Route path="/mynotes" component={NotesContainer} />
            <Route path="/account" component={Account} />
            <Route
               path="/login"
               render={(props) => {
                  return <Login {...props} handleAuth={handleAuth} />;
               }}
            />
            <Route path="/register" component={Register} />
            <Route path="/" component={Home} />
         </Switch>
      </div>
   );
};

export default withRouter(NavBar);
