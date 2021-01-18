
import React, { useState, useEffect } from 'react';

function Episode6() {

    const [episode6Comments, setEpisode6Comments] = useState([]);

    useEffect(() => {
        let myComments = []
        
        if(localStorage.getItem('revengeOfTheSith')) {
            myComments = JSON.parse(localStorage.getItem('revengeOfTheSith'));
        }

        setEpisode6Comments(myComments);
    }, []);

    return (
        <div className="Episode6">
            <h4>Revenge of the Sith comment history</h4>
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