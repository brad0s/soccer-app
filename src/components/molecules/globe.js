import React, { useState, useEffect, useRef } from 'react'
import Globe from 'react-globe.gl'
import { GLOBAL_LABEL_DATA } from '../../context/data'
import HEX_DATA from '../../context/countries-v2.geojson'
import globeImageNight from '../../assets/images/earth-night-v2.webp'

const GlobeComponent = () => {
  const [hexData, setHexData] = useState({ features: [] })
  const [labelData, setLabelData] = useState({ features: [] })
  const globeEl = useRef()

  useEffect(() => {
    setHexData(HEX_DATA)
    setLabelData(GLOBAL_LABEL_DATA)
  }, [])

  useEffect(() => {
    globeEl.current.controls().autoRotate = true
    globeEl.current.controls().enableZoom = false
    globeEl.current.controls().enableRotate = false
    globeEl.current.camera().zoom = 2.0
    globeEl.current.camera().rotateY(10)
    globeEl.current.pointOfView({ lat: 32, lng: 40, alt: 2 })
    // console.log(globeEl.current)
  }, [])

  return (
    <div className="Globe">
      <Globe
        ref={globeEl}
        globeImageUrl={globeImageNight}
        backgroundColor="#121217"
        atmosphereColor="#3491fd"
        showAtmosphere={false}
        labelsData={labelData.features}
        labelLat={(d) => d.properties.lat}
        labelLng={(d) => d.properties.lng}
        labelText={(d) => d.properties.text}
        labelSize={2.5}
        labelAltitude={0.01}
        labelDotRadius={1.5}
        labelColor={(d) => d.properties.color}
        labelDotOrientation={(d) => d.properties.labelPosition}
        hexPolygonsData={hexData.features}
        hexPolygonResolution={3} //values higher than 3 makes it buggy
        hexPolygonMargin={0.1}
        hexPolygonColor={() => 'rgba(255,255,255,0.3'}
        // hexPolygonColor={({ properties: d }) => {
        //   const dict = {
        //     GBR: '#3c1c5a',
        //     DEU: '#8e0902',
        //     ESP: '#f4a32e',
        //     SAU: '#61ab34',
        //     FRA: '#091c3e',
        //     USA: '#e2231a',
        //   }
        //   return dict[d.ISO_A3]
        // }}
        // // hexPolygonLabel="League"
        // hexPolygonLabel={({ properties: d }) => d.ADMIN}
      />
    </div>
  )
}

export default GlobeComponent
