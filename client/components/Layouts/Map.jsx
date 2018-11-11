
import React, { Component } from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps'

class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: -36.848461, lng: 174.763336 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ))
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `50vh`, width: '50vh' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map