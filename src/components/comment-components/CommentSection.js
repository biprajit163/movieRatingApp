import React, { useState, useEffect } from 'react';

import CommentForm from './CommentForm.js';
import CommentList from './CommentList.js';

function CommentSection({ movieTitle }) {

    const [comments, setComments] = useState([]);

    function addComment(comment) {
        const commentsArr = [...comments, comment];
        console.log(...comments);
        setComments(commentsArr);
    }

    useEffect(() => {

        if (comments.length === 0) {
            return
        } else {

            if(movieTitle === "A New Hope") {
                localStorage.setItem('aNewHope', JSON.stringify(comments));
            } else if(movieTitle === "The Empire Strikes Back") {
                localStorage.setItem('theEmpireStrikesBack', JSON.stringify(comments));
            } else if(movieTitle === "Return of the Jedi") {
                localStorage.setItem('returnOfTheJedi', JSON.stringify(comments));
            } else if(movieTitle === "The Phantom Menace") {
                localStorage.setItem('thePhantomMenace', JSON.stringify(comments));
            } else if(movieTitle === "Attack of the Clones") {
                localStorage.setItem('attackOfTheClones', JSON.stringify(comments));
            } else {
                localStorage.setItem('revengeOfTheSith', JSON.stringify(comments));
            }
        }

    }, [addComment]);

    return (
        <div className="CommentSection">
            <CommentForm onSubmit={addComment}/>
            <CommentList comments={comments}/>
        </div>
    );
}

export default CommentSection;