
import React from 'react';

import Episode1 from './Episode1.js';

function CommentHistory() {
    return (
        <div className="CommentHistory">
            <h1>My Comments History</h1>
            <button onClick={() => localStorage.clear()}>Clear Local Storage</button>

            <div className="comment-history-container">
                <Episode1/>
            </div>
        </div>
    );
}

export default CommentHistory;