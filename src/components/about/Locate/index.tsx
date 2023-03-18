import { Container, MapContainer, MapPane } from './styles';
import useLocate from './useLocate';

export default function Locate() {
  useLocate({ latitude: 37.613030445578595, longitude: 127.1535812801483 });

  return (
    <Container>
      <MapContainer>
        <MapPane id="map" />
      </MapContainer>
    </Container>
  );
}
