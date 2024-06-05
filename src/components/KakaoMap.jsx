import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const DEFAULT_LOCATION = {
  latitude: 37.566826,
  longitude: 126.9786567
};

const KakaoMap = () => {
  const [location, setLocation] = useState(DEFAULT_LOCATION); // 현재 위치를 저장할 상태

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []);

  const successHandler = (response) => {
    console.log(response); // coords: GeolocationCoordinates {latitude: 위도, longitude: 경도, …} timestamp: 1673446873903
    const { latitude, longitude } = response.coords;
    setLocation({ latitude, longitude });
  };

  const errorHandler = (error) => {
    console.log(error);
    // 에러가 발생해도 기본 위치를 사용하므로 별도의 처리가 필요없습니다.
  };

  return (
    <Map
      center={{ lat: location.latitude, lng: location.longitude }}
      style={{ width: "100%", height: '500px' }}
      level={3}
    >
      <MapMarker position={{ lat: location.latitude, lng: location.longitude }} />
    </Map>
  );
};

export default KakaoMap;
