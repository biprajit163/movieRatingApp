import React, { useState, useEffect } from 'react';

import CommentForm from './CommentForm.js';
import CommentList from './CommentList.js';

function CommentSection({ movieTitle }) {

    const [comments, setComments] = useState([]);

    function addComment(comment) {
        const commentsArr = [...comments, comment];

        let storedArr = [];
        let combinedArr = [];

        if(movieTitle === "A New Hope") {
            storedArr = JSON.parse(localStorage.getItem('aNewHope'));
        } else if(movieTitle === "The Empire Strikes Back") {
            storedArr = JSON.parse(localStorage.getItem('theEmpireStrikesBack'));
        } else if(movieTitle === "Return of the Jedi") {
            storedArr = JSON.parse(localStorage.getItem('returnOfTheJedi'));
        } else if(movieTitle === "The Phantom Menace") {
            storedArr = JSON.parse(localStorage.getItem('thePhantomMenace'));
        } else if(movieTitle === "Attack of the Clones") {
            storedArr = JSON.parse(localStorage.getItem('attackOfTheClones'));
        } else {
            storedArr = JSON.parse(localStorage.getItem('revengeOfTheSith'));
        }

        if(storedArr === null) {
            combinedArr = commentsArr;
        } else {
            combinedArr = storedArr.concat(commentsArr);
        }

        // combinedArr = storedArr.concat(commentsArr);
        console.log(combinedArr);

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
            <CommentForm addComment={addComment}/>
            <CommentList comments={comments}/>
        </div>
    );
}

export default CommentSection;