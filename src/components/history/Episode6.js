
import React, { useState, useEffect } from 'react';

function Episode6() {

    const [episode6Comments, setEpisode6Comments] = useState([]);

    useEffect(() => {
        let myComments = []
        
        if(localStorage.getItem('6')) {
            myComments = JSON.parse(localStorage.getItem('6'));
        }

        setEpisode6Comments(myComments);
    }, []);

    return (
        <div className="comment-history">
            <h4>Return of the Jedi</h4>
            {
                episode6Comments.map((comment, index) => {
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

export default Episode6;