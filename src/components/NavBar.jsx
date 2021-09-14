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
        <>
            <h1
                className="display-5 text-center"
                style={{
                    fontWeight: 'initial',
                    color: '#1a237e',
                    backgroundColor: '#fafafa',
                    padding: '20px',
                }}
            >
                USER AUTHENTICATION
            </h1>
            <ul
                className="nav mb-3 text-center"
                style={{
                    textAlign: 'center',
                    justifyContent: 'space-around',
                    backgroundColor: '#f5f5f5',
                }}
            >
                <li className="nav-item">
                    <Link
                        to="/"
                        className="nav-link"
                        style={{
                            fontSize: '30px',
                            color: '#673ab7',
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
                                className="nav-link"
                                style={{
                                    fontSize: '30px',
                                    color: '#673ab7',
                                    textTransform: 'capitalize',
                                }}
                            >
                                Account
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/mynotes"
                                className="nav-link"
                                style={{
                                    fontSize: '30px',
                                    color: '#673ab7',
                                    textTransform: 'capitalize',
                                }}
                            >
                                My Notes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to=""
                                className="nav-link"
                                style={{
                                    fontSize: '30px',
                                    color: '#673ab7',
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
                                className="nav-link"
                                style={{
                                    fontSize: '30px',
                                    color: '#673ab7',
                                    textTransform: 'capitalize',
                                }}
                            >
                                Register
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Login"
                                className="nav-link"
                                style={{
                                    fontSize: '30px',
                                    color: '#673ab7',
                                    textTransform: 'capitalize',
                                }}
                            >
                                Login
                            </Link>
                        </li>
                    </>
                )}
            </ul>

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
        </>
    );
};

export default withRouter(NavBar);
