import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";


function AlbumPage() {
  const { albumId } = useParams();

  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [photoUrls, setPhotoUrls] = useState({});

  const handleDelete = async (album_id, photo_id) => {
    const authToken = localStorage.getItem('authToken');
    const confirmDelete = window.confirm('Are you sure you want to delete this photo?');

    if(!confirmDelete){
      return;
    }else{
      try{

        const response = await fetch(`http://localhost:8080/api/v1/album/albums/${album_id}/photos/${photo_id}/delete`, {
          method: "DELETE",
          headers: {
            Authorization: 'Bearer ' + authToken
          }
        });

        if(!response.ok){
          throw new Error("Failed to delete photo");
        }
        setAlbum(prevAlbum => ({
      ...prevAlbum,
      photos: prevAlbum.photos.filter(photo => photo.id !== photo_id)
    }));
      }catch(error){
        setError(error.message);
        window.alert(error.message);
      }
    }

  }

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        const response = await fetch(
          `http://localhost:8080/api/v1/album/albums/${albumId}`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to get the album photos :(");
        }

        const data = await response.json();
        console.log(data);
        setAlbum(data);

      data.photos.map(async (photo) => {
        const response = await fetch(`http://localhost:8080/api/v1/album/albums/${albumId}/photos/${photo.id}/download-thumbnail`, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })

        const imageBlob = await response.blob(); 
        const temporaryUrl = URL.createObjectURL(imageBlob);
        setPhotoUrls(prevUrls => ({ ...prevUrls, [photo.id]: temporaryUrl }));

        console.log("hi: " + response);

      })

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAlbum();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (album && album.photos && album.photos.length === 0) {
    return <div>No photos added</div>;
  }

  // If the album data itself wasn't found
  if (!album) {
    return <div>Album not found</div>;
  }

return (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
    {album.photos.map((photo) => (
      <Card key={photo.id} style={{ width: "18rem" }}>
        <Card.Img src={photoUrls[photo.id]} alt={photo.name} />
        <Card.Body>
          <Card.Text>{photo.name}</Card.Text>
          <Card.Text>{photo.description}</Card.Text>
          <Card.Text>{photo.fileName}</Card.Text>
          <Button variant="danger" onClick={() => handleDelete(albumId, photo.id)}>Delete</Button>
        </Card.Body>
      </Card>
    ))}
  </div>
);
}

export default AlbumPage;
