// src/MapScreen.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const MapScreen = ({ setScreen }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }

    // Fetch the list of locations from the server
    // TODO: Replace with appropriate constant
    fetch('http://localhost:3001/locations')
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => console.error('Error fetching locations:', error));
  }, []);

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  let navigate = useNavigate();
  const routeChange = (detailId) => {
    let path = `/pin-details/${detailId}`;
    navigate(path);
  }

  const center = userLocation || { lat: 37.7749, lng: -122.4194 };

  return (
    <div>
      <h2>Map</h2>
      <LoadScript googleMapsApiKey="AIzaSyAw3iHXjpJ1hyRjE3ebpQf7lxb2KYTnqZY">
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
          {locations.map((location) => (
            <MarkerF
              key={location.id}
              position={{ lat: location.lat, lng: location.lng }}
              title={location.name}
              onClick={() => routeChange(location.id)}
            >
            </MarkerF>
          ))}
        </GoogleMap>
      </LoadScript>
      <button onClick={() => setScreen('camera')}>Go to Camera Upload</button>
    </div>
  );
};

export default MapScreen;