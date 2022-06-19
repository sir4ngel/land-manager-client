import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
    return (
        <MapContainer style={{ height: '100%', width: '100%' }} center={[29.043733, -110.870110]} zoom={15} scrollWheelZoom={false} zoomControl={false}>
            <TileLayer
                url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
                maxZoom={20}
                subdomains={['mt1', 'mt2', 'mt3']}
            />
        </MapContainer>
    )
}