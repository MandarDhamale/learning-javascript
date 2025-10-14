import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function AlbumPage() {
  const { albumId } = useParams();

  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        <Card.Img src={`http://localhost:8080/api/v1/album/albums/${albumId}/photos/${photo.id}/download-thumbnail`} alt={photo.name} />
        <Card.Body>
          <Card.Text>{photo.name}</Card.Text>
          <Card.Text>{photo.description}</Card.Text>
          <Card.Text>{photo.fileName}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  </div>
);
//TODO: Image data loaded, not need to work on getting the images
}

export default AlbumPage;
