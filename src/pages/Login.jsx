import {useState} from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    return (
        <>
            <div className='container-fluid min-vh-100 d-flex justify-content-center align-items-center'>
                <div className='row w-100'>
                    <div className='col-sm-8 offset-sm-2 col-md-4 offset-md-4 bg-light my-4 p-3 border border-1 rounded-3'>
                        <h2 className='text-center'>Login</h2>

                        <div className='my-3'>
                            <label className='form-label'>Email</label>
                            <input 
                                className='form-control'
                                type="email"
                                placeholder='Enter email'
                            />
                        </div>

                        <div className='my-3'>
                            <label className='form-label'>Password</label>
                            <input 
                                type="password"
                                className='form-control'
                                placeholder='Enter password'
                            />
                        </div>

                        <button 
                            className='btn btn-success my-4 w-100'
                            onClick={() => navigate("/Dashboard")}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;






