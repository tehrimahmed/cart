import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('customer');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (role === 'customer' && username === 'username' && password === 'password') {
            setLoggedIn(true);
            navigate('/items');
        } else if (role === 'admin' && username === 'username' && password === 'password') {
            setLoggedIn(true);
            navigate('/admin');
        }
    };


    if (isLoggedIn) {
        return null;
    }

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="login-page">
                <h1 className="text-center">Login</h1>
                <form className="login-form" onSubmit={handleLogin}>
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <div className="radio-group">
                    <label>
                        <input
                            type="radio"
                            value="customer"
                            checked={role === 'customer'}
                            onChange={handleRoleChange}
                        />
                        Customer
                    </label>
                    <label style={{marginLeft:"3rem"}}>
                        <input
                            type="radio"
                            value="admin"
                            checked={role === 'admin'}
                            onChange={handleRoleChange}
                        />
                        Admin
                    </label>
                    </div>
                    <div>
                    <button type="submit" style={{marginTop:"2rem"}} className="btn btn-warning btn-block">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
