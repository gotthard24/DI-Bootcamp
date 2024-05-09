import { useEffect, useState } from "react";
import { createClient } from 'pexels';
import { useParams } from "react-router-dom";

const Photoes = ({ category }) => {
    const [photoList, setPhotoList] = useState([]);

    useEffect(() => {
        if (category) {
            const client = createClient('1nweLSDoYFgCMSTQ8wgQ5sLzd4EMKsuX3PU7Q2L8OBWTfGMUny0hAXDW');
            let query = `${category}`;
            console.log(query);

            if(query === 'search'){

            }
            
            client.photos.search({ query, per_page: 4 })
                .then(photos => {
                    setPhotoList(photos.photos);
                })
                .catch(error => {
                    console.error('Error fetching photos:', error);
                });
        }
    }, [category]);

    if (!category) {
        return <div>Loading...</div>; 
    }

    return (
        <>
            <h1>Photos</h1>
            <div>
                {photoList.map((photo, index) => (
                    <img key={index} src={photo.src.medium} alt={`Photo ${index}`} />
                ))}
            </div>
        </>
    );
}

export default Photoes;
