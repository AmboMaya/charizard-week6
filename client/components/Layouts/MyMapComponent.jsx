import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox'

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={props.center}
    center={props.center}
  >
    {props.isMarkerShown && <Marker position={props.marker} />}
    {props.isMarkerShown && <InfoBox
      position={new google.maps.LatLng(props.marker.lat, props.marker.lng)}
      options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
      <div style={{ backgroundColor: `white`, padding: `15px` }}>
        <div style={{ fontSize: `16px`, fontWeight: 'bold', fontColor: `#08233B` }}>
          {props.provider} <br/>
          {props.address}
        </div>
      </div>
    </InfoBox> }
  </GoogleMap>
))

export default MyMapComponent