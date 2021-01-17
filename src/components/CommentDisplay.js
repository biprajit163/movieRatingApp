import React, { useState } from 'react';

function CommentDisplay({ comments }) {
    return (
        <div className="CommentDisplay">
            {
                comments.map((comment, index) => {
                    return(
                        <p key={index}>
                            {comment}
                        </p>
                    )
                })
            }
        </div>
    );
}

export default CommentDisplay;