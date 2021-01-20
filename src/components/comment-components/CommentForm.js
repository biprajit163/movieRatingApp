
import React, { useState } from 'react';
import { FaAtom } from 'react-icons/fa';

function CommentForm({ addComment }) {

    const [comment, setComment] = useState('');

    function handleSubmit(event) {
        event.preventDefault()
        addComment(comment);
        setComment('');
    }

    function handleChange(event) {
        setComment(event.target.value)
    }
    
    return (
        <form onSubmit={handleSubmit} className="comment-form">
            {/* <label htmlFor="comment">Make a comment:</label> */}
            <textarea 
                placeholder="Add a comment..."
                id="comment" 
                type="text" 
                value={comment}
                onChange={handleChange}
                cols="100"
                rows="2"
            ></textarea>
            <button type="submit" className="comment-form-button"
                style={{
                    width: '80px',
                    height: 'auto'
                }}
            >
                <FaAtom
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                />
            </button>
        </form>
    );
}

export default CommentForm;