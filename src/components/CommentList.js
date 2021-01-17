import React, { useState } from 'react';

import CommentForm from './CommentForm.js';
import CommentDisplay from './CommentDisplay.js';

function CommentList() {

    const [comments, setComments] = useState([]);

    function addComment(comment) {
        const commentsArr = [...comments, comment];
        console.log(...comments);
        setComments(commentsArr);
    }

    return (
        <div>
            <CommentForm onSubmit={addComment}/>
            <CommentDisplay comments={comments}/>
        </div>
    );
}

export default CommentList;