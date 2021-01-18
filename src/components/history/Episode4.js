import React, { useState, useEffect } from 'react';

function Episode4() {

    const [episode4Comments, setEpisode4Comments] = useState([]);

    useEffect(() => {
        let myComments = []
        
        if(localStorage.getItem('thePhantomMenace')) {
            myComments = JSON.parse(localStorage.getItem('thePhantomMenace'))
        }

        setEpisode4Comments(myComments);
    }, []);

    return (
        <div className="Episode4">
            <h4>The Phantom Menace comment history</h4>
            {
                episode4Comments.map((comment, index) => {
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
 
export default Episode4;