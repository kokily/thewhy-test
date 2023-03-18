import { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface Props {
  latitude: number;
  longitude: number;
}

export default function useLocate({ latitude, longitude }: Props) {
  useEffect(() => {
    const $script = document.createElement('script');

    $script.async = true;
    $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appKey=${process.env.NEXT_PUBLIC_KAKAOMAP_APP_KEY}&autoload=false`;

    document.head.appendChild($script);

    const onLoadMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
          level: 2,
        };
        new window.kakao.maps.Map(container, options);
      });
    };

    $script.addEventListener('load', onLoadMap);

    return () => $script.removeEventListener('load', onLoadMap);
  }, [latitude, longitude]);
}
