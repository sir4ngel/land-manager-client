import { MapContainer, Marker, Polygon, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map(props) {
    return (
        <MapContainer style={{ height: '100%', width: '100%' }} center={[29.043733, -110.870110]} zoom={15}>
            <TileLayer
                url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
                maxZoom={20}
                subdomains={['mt1', 'mt2', 'mt3']}
            />
            {
                props.lands.map((item) => (
                    <Polygon key={item.id} pathOptions={{ color: 'purple' }} positions={item.geom.coordinates[0]}>
                        <Popup>{item.name}</Popup>
                    </Polygon>
                ))
            }
        </MapContainer>
    )
}