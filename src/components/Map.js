import React from "react";

const Map = ({ mapSrc }) => {
  return (
    <div>
      <iframe
        title="Google Map"
        width="600"
        height="450"
        frameborder="0"
        style={{ border: 0 }}
        src={mapSrc}
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Map;
