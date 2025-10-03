import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eror, setError] = useState(null);

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

  return (
    <div>
      <h1>Welcome to your Dashboard!</h1>
      <p>You are successfully logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
