
import React, { useState } from 'react';


function CommentForm({ onSubmit }) {

    const [comment, setComment] = useState('');

    function handleSubmit(event) {
        event.preventDefault()
        onSubmit(comment);
        setComment('');
    }

    function handleChange(event) {
        setComment(event.target.value)
    }
    
    return (
        <form onSubmit={handleSubmit} className="comment-form">
            <label htmlFor="comment">Make a comment:</label>
            <textarea 
                id="comment" 
                type="text" 
                value={comment}
                onChange={handleChange}
                cols="10"
                rows="5"
            ></textarea>
            <button type="submit" className="comment-form-button">Comment</button>
        </form>
    );
}

export default CommentForm;