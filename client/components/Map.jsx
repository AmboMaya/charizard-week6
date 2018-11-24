import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Polyline, Marker } from 'react-google-maps'

// var range = new google.maps.Polygon({
//   paths: [
//     new google.maps.LatLng(-33.8485, 172.7633),
//     new google.maps.LatLng(-38.8485, 172.7633),
//     new google.maps.LatLng(-33.8485, 177.7633),
//     new google.maps.LatLng(-38.8485, 177.7633)
//   ]
// });

const Map = ({question}) => {
  const GoogleMapContainer = withGoogleMap(() => (
    <GoogleMap
      defaultCenter = { { lat: -36.8485, lng: 174.7633 } }
      defaultZoom = { 12 }
    >
    {question.show && <Marker position={question.position} />}
       {/* <Polyline
//                 path={range}
//                 geodesic={true}
//                 options={{
//                     strokeColor: "#ff2527",
//                     strokeOpacity: 0.75,
//                     strokeWeight: 2,
//                     icons: [
//                         {
//                             icon: lineSymbol,
//                             offset: "0",
//                             repeat: "20px"
//                         }
//                     ] 
//                 }}
//             /> */}
    </GoogleMap>
  ))
  return (
    <div>
      <GoogleMapContainer
        containerElement={ <div style={{ height: `500px`, width: '100%' }} /> }
        mapElement={ <div style={{ height: `100%` }} /> } 
        />
    </div>
  )
}
export default Map