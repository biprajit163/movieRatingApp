import React from 'react';

function Credentials({ handleSubmit, handleChange, login }) {
    return (
        <div className="SetPassword">
            <form onSubmit={handleSubmit}>
                <label htmlFor="password">Password:</label>
                <input 
                    type="text"
                    placeholder="Password"
                    id="password"
                    onChange={handleChange}
                    value={login.password}
                />
            </form>
        </div>
    );
}

export default Credentials;