
import React from 'react';

import Episode1 from './Episode1.js';
import Episode2 from './Episode2.js';
import Episode3 from './Episode3.js';
import Episode4 from './Episode4.js';
import Episode5 from './Episode5.js';
import Episode6 from './Episode6.js';

function CommentHistory() {
    return (
        <div className="CommentHistory">
            <h1>My Comments History</h1>
            <button onClick={() => localStorage.clear()}>Clear Local Storage</button>

            <div className="comment-history-container">
                <Episode1/>
                <Episode2/>
                <Episode3/>
                <Episode4/>
                <Episode5/>
                <Episode6/>
            </div>
        </div>
    );
}

export default CommentHistory;