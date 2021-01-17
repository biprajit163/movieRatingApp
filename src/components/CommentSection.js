
import React, { useState } from 'react';


function CommentSection() {

    const [myComment, setMyComment] = useState('');

    function handleSubmit(event) {
        event.preventDefault()
        console.log(myComment);
        setMyComment('');
    }

    function handleChange(event) {
        setMyComment(event.target.value)
    }

    

    return (
        <div className="CommentSection">
            <form onSubmit={handleSubmit} className="commentSection-form">
                <label htmlFor="comment">Make a comment:</label>
                <textarea 
                    id="comment"  
                    value={myComment.comment}
                    onChange={handleChange}
                    cols="10"
                    rows="5"
                ></textarea>
                <button type="submit" className="commentSection-button">Comment</button>
            </form>

            <div className="comment-section-submit"></div>
        </div>
    );
}

export default CommentSection;