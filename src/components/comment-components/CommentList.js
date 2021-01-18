import React from 'react';

function CommentList({ comments }) {
    return (
        <div className="CommentList">
            {
                comments.map((comment, index) => {
                    return(
                        <p 
                            key={index}
                            style={{
                                textAlign: 'left'
                            }}
                        >
                            {comment}
                        </p>
                    )
                })
            }
        </div>
    );
}

export default CommentList;