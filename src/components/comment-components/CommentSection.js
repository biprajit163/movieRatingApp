import React, { useState } from 'react';

import CommentForm from './CommentForm.js';
import CommentList from './CommentList.js';

function CommentSection() {

    const [comments, setComments] = useState([]);

    function addComment(comment) {
        const commentsArr = [...comments, comment];
        console.log(...comments);
        setComments(commentsArr);
    }

    return (
        <div className="CommentSection">
            <CommentForm onSubmit={addComment}/>
            <CommentList comments={comments}/>
        </div>
    );
}

export default CommentSection;