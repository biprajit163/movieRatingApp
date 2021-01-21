
import React, { useState, useEffect } from 'react';

function Episode5() {

    const [episode5Comments, setEpisode5Comments] = useState([]);

    useEffect(() => {
        let myComments = []
        
        if(localStorage.getItem('5')) {
            myComments = JSON.parse(localStorage.getItem('5'))
        }

        setEpisode5Comments(myComments);
    }, []);

    return (
        <div className="comment-history">
            <h4>The Empire Strikes Back</h4>
            {
                episode5Comments.map((comment, index) => {
                    return(
                        <p 
                            key={index} 
                            style={{textAlign: 'left'}}
                        >{comment}</p>
                    );
                })
            }
        </div>
    );
}

export default Episode5;