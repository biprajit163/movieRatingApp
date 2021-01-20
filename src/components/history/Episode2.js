
import React, { useState, useEffect } from 'react';

function Episode2() {

    const [episode2Comments, setEpisode2Comments] = useState([]);

    useEffect(() => {
        let myComments = []
        
        if(localStorage.getItem('2')) {
            myComments = JSON.parse(localStorage.getItem('2'))
        }

        setEpisode2Comments(myComments);
    }, []);

    return (
        <div className="comment-history">
            <h4>The Empire Strikes Back comment history</h4>
            {
                episode2Comments.map((comment, index) => {
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

export default Episode2;