
import React, { useState } from 'react';
import { FaJedi } from 'react-icons/fa'

function Rating() {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);


    function saveRating(event) {
        setRating(event.target.value);
    }

    return(
        <div className="Rating">
            {[...Array(5)].map((item, index) => {
                let ratingValue = index + 1;

                return(
                    <label key={index}>
                        <input 
                            type="radio" 
                            value={ratingValue}
                            onClick={saveRating}   
                        />
                        <FaJedi 
                            className="rating-icon"
                            onMouseEnter={() => setHover(ratingValue)} 
                            onMouseLeave={() => setHover(null)}
                            style={{
                                width: '25px',
                                height: '25px'
                            }}
                            color={
                                ratingValue <= (hover || rating) ? "#39ff14" : ""
                            }
                        />
                    </label>
                )
            })}
        </div>
    );
}


export default Rating;
