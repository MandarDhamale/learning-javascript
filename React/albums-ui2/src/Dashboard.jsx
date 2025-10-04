import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';

function Dashboard() {
  const navigate = useNavigate();

  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
    // 1. Define the async function that will do the fetching
    const fetchAlbums = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        const response = await fetch("http://localhost:8080/api/v1/album/albums", {
          headers: {
            Authorization: "Bearer " + authToken,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch albums. Please try logging in again.");
        }

        const data = await response.json();
        setAlbums(data); // Success! Update the albums.
        console.log(data);

      } catch (err) {
        setError(err.message); // An error happened. Update the error state.
      } finally {
        setLoading(false); // This always runs at the end. Stop loading.
      }
    };

    // 2. Call the function to run it
    fetchAlbums();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  if(loading){
    return <div>Loading...</div>;
  }
  if(error){
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={handleLogout}>Go to Login</button>
      </div>
    )
  }

  return (
    <div>      
      <h3>Your Albums</h3>
      {albums.length === 0 ? (
        <p>No albums found.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {albums.map((album) => (
            <Card key={album.id} style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{album.name}</Card.Title>
                <Card.Text>{album.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
