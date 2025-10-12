import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function AlbumPage() {
    const {albumId} = useParams();

    const [album, setAlbum] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAlbum = async () => {
            try{
                const authToken = localStorage.getItem('authToken');
                const response = await fetch(`http://localhost:8080/api/v1/album/albums/${albumId}`, {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                })

                if(!response.ok){
                    throw new Error("Failed to get the album photos :(");
                }

                const data = await response.json();
                console.log(data);
                setAlbum(data);

            }catch(error){
                setError(error.message);
            }finally{
                setLoading(false);
            }
        }
        fetchAlbum();
    }, []);

    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error: {error}</div>
    }


    return (
        <div>Album Page (ID:{albumId})</div>
        
    )
}

export default AlbumPage;