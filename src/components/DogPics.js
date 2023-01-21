import React, { useEffect, useState } from "react";

function DogPics() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random/3")
        .then(response => response.json())
        /**Setting state in the useEffect callback */
        .then(data => setImages(data.message));
    }, []);

    return (
        <div>
            {images.map(image => {
                return <img src={image} alt="Dog pic" key={image}/>
            })}
        </div>
    );
}

export default DogPics;