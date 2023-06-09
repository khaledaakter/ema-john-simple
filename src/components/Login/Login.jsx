import React from 'react';
import './Login.css'
import { getAuth } from "firebase/auth";

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
            </form>
        </div>
    );
};

export default Login;