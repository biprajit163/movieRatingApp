
import React, { useState, useEffect } from 'react';

function Episode1() {

    const [episode1Comments, setEpisode1Comments] = useState([]);

    useEffect(() => {
        let myComments = []
        
        if(localStorage.getItem('1')) {
            myComments = JSON.parse(localStorage.getItem('1'));
        } 

        setEpisode1Comments(myComments);
    }, []);

    return (
        <div className="comment-history">
            <h4>The Phantom Menace comment history</h4>
            {
                episode1Comments.map((comment, index) => {
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

export default Episode1;