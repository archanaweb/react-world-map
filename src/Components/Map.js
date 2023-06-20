import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMapEvents, GeoJSON, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import CountryData from './CountryData';
import L from 'leaflet';
import Header from './Header';
import { MapWrapper } from './MapStyle';

const icon = L.icon({ iconUrl: "/images/marker-icon.png", iconAnchor: [20,30]});

function Map() {
    // const position = [51.505, -0.09];
    const [position, setPosition] = React.useState([20, 77]);
    const [selectedCountry, setSelectedCountry] = React.useState(null);
    const [countryList, setCountryList ] = React.useState([]);
    const [mapPosition, setMapPosition] = React.useState(null);

    useEffect(()=>{
      if(mapPosition){
        mapPosition.setView(position, 4)
      }
     
    },[selectedCountry])

    const getCountryList = async () => {
        const listResponse = await axios.get(
            `https://restcountries.com/v3.1/all`
          );
          setCountryList(listResponse.data);
          var defaultCountry = listResponse.data.find((item)=>item.area === 3287590);
          setSelectedCountry(defaultCountry);
    }

    useEffect( ()=>{
        getCountryList();
    },[])

  const handleCountryClick = async (event) => {
    console.log("clicked")
    const { latlng } = event;
    const { lat, lng } = latlng;
    setPosition([lat,lng])

    try {
      const response = await axios.get(
        `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`
      );
     
      if(response?.data?.address?.country){
          const countryResponse = await axios.get(
            `https://restcountries.com/v3.1/name/${response.data.address.country}`
          );
          const countryData = countryResponse.data[0];
          
        //   console.log(countryResponse)
          setSelectedCountry(countryData);
      }


    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  };
  

  function MapClickHandler() {
    useMapEvents({
      click: handleCountryClick,
    });

    return null;
  }

  return (
    <>
      <Header countryList={countryList} setPosition={setPosition} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}/>
        <MapWrapper>
          <MapContainer
            center={position}
            zoom={2}
            
            ref={setMapPosition}
          >
            <MapClickHandler />
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position} icon={icon} />
            {/* Add markers or other map elements if needed */}
            
          </MapContainer>
              {selectedCountry && <CountryData selectedCountry={selectedCountry}/>}
        </MapWrapper>
    </>
    
  );
}

export default Map;
