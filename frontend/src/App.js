import Map, { Marker } from "react-map-gl";
import { HiLocationMarker } from "react-icons/hi";
function App() {
  return (
    <Map
      initialViewState={{
        longitude: 85.315716,
        latitude: 27.6835509,
        zoom: 13,
      }}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker
        longitude={85.315716}
        latitude={27.6835509}
        anchor="bottom"
        style={{ size: "3rem" }}
      >
        <HiLocationMarker />
      </Marker>
    </Map>
  );
}

export default App;
