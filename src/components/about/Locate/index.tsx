import { Container, MapContainer, MapPane } from './styles';
import useLocate from './useLocate';

export default function Locate() {
  const kakaoMap = useLocate();

  return (
    <Container>
      <MapContainer>
        <MapPane className="map" ref={kakaoMap} />
      </MapContainer>
    </Container>
  );
}
