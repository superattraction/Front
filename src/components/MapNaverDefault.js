import React, { useEffect, useRef, useState } from "react";

const MyMap = ({ address }) => {
  const mapElement = useRef(null);
  const markerRef = useRef(null);
  const { naver } = window;
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    if (!mapElement.current || !naver) return;

    // 초기 지도 설정
    const mapOptions = {
      center: new naver.maps.LatLng(37.5656, 126.9769), // 기본 중심 좌표
      zoom: 15,
      zoomControl: true,
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);
    mapElement.current._map = map; // map 객체를 저장

    // 현재 위치 가져오기
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ lat: latitude, lng: longitude });

        const location = new naver.maps.LatLng(latitude, longitude);

        // 지도 중심 좌표와 줌 레벨 설정
        map.setCenter(location);
        map.setZoom(15);

        if (!markerRef.current) {
          markerRef.current = new naver.maps.Marker({
            position: location,
            map,
          });
        } else {
          markerRef.current.setPosition(location);
        }
      },
      (error) => {
        console.error("Error fetching current position:", error);
      }
    );

    return () => {
      if (mapElement.current) {
        mapElement.current._map = null; // 컴포넌트 언마운트 시 맵 객체 해제
      }
    };
  }, [naver]);

  useEffect(() => {
    if (!naver || !mapElement.current || !address) return;

    const map = mapElement.current._map;

    naver.maps.Service.geocode({ query: address }, (status, response) => {
      if (
        status === naver.maps.Service.Status.OK &&
        response.v2.addresses.length > 0
      ) {
        const { x, y } = response.v2.addresses[0];
        const location = new naver.maps.LatLng(y, x);

        // 지도 중심 좌표와 줌 레벨 설정
        map.setCenter(location);
        map.setZoom(17);

        if (!markerRef.current) {
          markerRef.current = new naver.maps.Marker({
            position: location,
            map,
          });
        } else {
          markerRef.current.setPosition(location);
        }
      } else {
        console.error(`주소 지오코딩에 실패했습니다: ${address}`);
      }
    });
  }, [address, naver]);

  return (
    <div style={{ width: '100%', height: '80%' }}>
      <div ref={mapElement} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default MyMap;
