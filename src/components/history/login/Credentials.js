
import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';


function Credentials({ handleSubmit, handleChange, login }) {

    const [toggle, setToggle] = useState({
        type: 'password',
        counter: 0
    });

    function togglePassword() {
        if(toggle.counter % 2 === 0) {
            setToggle({
                type: 'text',
                counter: toggle.counter + 1
            })
        } else {
            setToggle({
                type: 'password',
                counter: toggle.counter + 1
            })
        }
    }

    return (
        <div className="Credentials">
            <form onSubmit={handleSubmit} className="login-page">
                <label htmlFor="password">Password: </label>
                <input 
                    type={`${toggle.type}`}
                    placeholder="Password"
                    id="password"
                    onChange={handleChange}
                    value={login.password}
                />
                <FaEye className="login-icon" onClick={() => togglePassword()}/>
            </form>
        </div>
    );
}

export default Credentials;