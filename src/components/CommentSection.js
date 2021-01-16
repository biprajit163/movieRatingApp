
import React, { useState } from 'react';


function CommentSection() {

    const [myComment, setMyComment] = useState('');

    function handleSubmit(event) {
        event.preventDefault()

        setMyComment(event.target.value);
    }

    function handleChange(event) {
        setMyComment(event.target.value)
    }

    return (
        <div className="CommentSection">
            <form onSubmit={handleSubmit}>
                <label htmlFor="comment">Make a comment:</label>
                <textarea 
                    id="comment"  
                    value={myComment.comment}
                    onChange={handleChange}
                    cols="50"
                    rows="10"
                ></textarea>
                <button type="submit">Comment</button>
            </form>

            <div className="comment-section"></div>
        </div>
    );
}

export default CommentSection;