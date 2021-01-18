
import React, { useState, useEffect } from 'react';

import Credentials from './login/Credentials.js';

import Episode1 from './Episode1.js';
import Episode2 from './Episode2.js';
import Episode3 from './Episode3.js';
import Episode4 from './Episode4.js';
import Episode5 from './Episode5.js';
import Episode6 from './Episode6.js';

function CommentHistory() {

    const initialState = {
        password: ''
    }

    const [login, setPassword] = useState(initialState)

    function handleSubmit(event) {
        event.preventDefault();
        console.log(login.password);
        setPassword(initialState)
    }

    function handleChange(event) {
        setPassword({...login, [event.target.id]: event.target.value})
    }

    return (
        <div className="CommentHistory">
            <h1>My Comments History</h1>
            {
                login.password === "myComments" ?
                <div className="comment-history-container">
                    <button onClick={() => localStorage.clear()}>Clear Local Storage</button>
                    <button onClick={() => setPassword(initialState)}>Logout</button>
                    <Episode1/>
                    <Episode2/>
                    <Episode3/>
                    <Episode4/>
                    <Episode5/>
                    <Episode6/>
                </div> :
                <div className="login-page">
                    <Credentials 
                        handleSubmit={handleSubmit} 
                        handleChange={handleChange}
                        login={login}
                    />
                </div>
            }
        </div>
    );
}

export default CommentHistory;