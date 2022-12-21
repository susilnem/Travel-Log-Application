import * as React from "react";
import Map, { Marker, GeolocateControl, Popup } from "react-map-gl";
// import { HiLocationMarker } from "react-icons/hi";
import "mapbox-gl/dist/mapbox-gl.css";

function App() {
  const [showPopup, setShowPopup] = React.useState(true);
  const geolocateControlRef = React.useCallback((ref) => {
    if (ref) {
      // Activate as soon as the control is loaded
      ref.trigger();
    }
  }, []);
  return (
    <Map
      initialViewState={{
        longitude: 85.315716,
        latitude: 27.6835509,
        zoom: 20,
      }}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <GeolocateControl
        ref={geolocateControlRef}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
      ></GeolocateControl>
      {showPopup && (
        <Popup
          className="w-full p-3"
          longitude={85.315716}
          latitude={27.6835509}
          anchor="bottom"
          closeOnClick={false}
          onClose={() => setShowPopup(false)}
        >
          <div className=" flex flex-col text-2xl">
            <label>Title -</label>
            <label>Description -</label>
            <label>Rating -</label>
            <label>Image</label>
          </div>
        </Popup>
      )}
    </Map>
  );
}

export default App;
