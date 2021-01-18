
import React, { useState, useEffect } from 'react';

function Episode5() {

    const [episode5Comments, setEpisode5Comments] = useState([]);

    useEffect(() => {
        let myComments = []
        
        if(localStorage.getItem('attackOfTheClones')) {
            myComments = JSON.parse(localStorage.getItem('attackOfTheClones'))
        }

        setEpisode5Comments(myComments);
    }, []);

    return (
        <div className="Episode5">
            <h4>Attack of the Clones comment history</h4>
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