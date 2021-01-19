import React, { useState, useEffect } from 'react';

import CommentForm from './CommentForm.js';
import CommentList from './CommentList.js';

function CommentSection({ movie }) {

    const [comments, setComments] = useState([]);

    function addComment(comment) {
        const commentsArr = [...comments, comment];
        setComments(commentsArr);
    }

    useEffect(() => {

        if(movie.episode_id) {
            localStorage.setItem(`${movie.episode_id}`, JSON.stringify(comments))
        }
        

    }, [addComment]);


    return (
        <div className="CommentSection">
            <CommentForm addComment={addComment}/>
            <CommentList comments={comments}/>
        </div>
    );
}

export default CommentSection;