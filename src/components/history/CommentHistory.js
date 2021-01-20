
import React, { useState } from 'react';

import Credentials from './login/Credentials.js';

import Episode1 from './Episode1.js';
import Episode2 from './Episode2.js';
import Episode3 from './Episode3.js';
import Episode4 from './Episode4.js';
import Episode5 from './Episode5.js';
import Episode6 from './Episode6.js';

function CommentHistory() {
    
    const initialState = {
        password: '',
        loginStatus: false
    }

    const [login, setLogin] = useState(initialState);
    const [password, setPassword] = useState('commentHistory123');

    function handleSubmit(event) {
        event.preventDefault();

        if(login.password === password) {
            setLogin({...login, loginStatus: true});
            localStorage.setItem('loginStatus', 'true');
        } else {
            setLogin(initialState);
            localStorage.setItem('loginStatus', login.loginStatus);
        }
    }

    function handleChange(event) {
        setLogin({...login, password: event.target.value});
    }

    return (
        <div className="CommentHistory">
            <h1>My Comments History</h1>
            {
                JSON.parse(localStorage.getItem('loginStatus')) ?
                <div className="comment-history-container">
                    <div className="history-btn-container">
                        <button
                            className="clear-comments-history" 
                            onClick={() => {
                                window.location.reload()
                                localStorage.removeItem('1');
                                localStorage.removeItem('2');
                                localStorage.removeItem('3');
                                localStorage.removeItem('4');
                                localStorage.removeItem('5');
                                localStorage.removeItem('6');
                            }}
                        >Clear Comments</button>
                        <button
                            className="logout-btn" 
                            onClick={() => {
                                window.location.reload()
                                localStorage.setItem('loginStatus', JSON.stringify(initialState.loginStatus));
                            }}
                        >Logout</button>
                    </div>
                    <Episode1/>
                    <Episode2/>
                    <Episode3/>
                    <Episode4/>
                    <Episode5/>
                    <Episode6/>
                </div> :
                <Credentials 
                    handleSubmit={handleSubmit} 
                    handleChange={handleChange}
                    login={login}
                />
            }
        </div>
    );
}

export default CommentHistory;