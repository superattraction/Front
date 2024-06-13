import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const DEFAULT_LOCATION = {
  latitude: 37.566826,
  longitude: 126.9786567,
};

const KakaoMap = () => {
  const [location, setLocation] = useState(DEFAULT_LOCATION); // 현재 위치를 저장할 상태
  const [address, setAddress] = useState(""); // 주소를 저장할 상태
  const [geocoder, setGeocoder] = useState(null); // Geocoder 객체를 저장할 상태

  useEffect(() => {
    // Kakao 지도 API 스크립트를 동적으로 로드
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=c25cdcf49f9aa5ad9398bbf7666b5358&libraries=services`;
    script.async = true;
    script.onload = () => {
      // 스크립트가 로드된 후 Geocoder 객체 초기화
      if (window.kakao && window.kakao.maps && window.kakao.maps.services) {
        setGeocoder(new window.kakao.maps.services.Geocoder());
        navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
      } else {
        console.error("Kakao maps script not properly loaded");
      }
      // 현재 위치 가져오기
    };
    script.onerror = () => {
      console.error("Error loading Kakao maps script");
    };
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (geocoder && address) {
      geocoder.addressSearch(address, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const { y, x } = result[0];
          setLocation({ latitude: parseFloat(y), longitude: parseFloat(x) });
        } else {
          console.log("Geocode was not successful for the following reason: " + status);
        }
      });
    }
  }, [address, geocoder, setLocation]);


  const successHandler = (response) => {
    const { latitude, longitude } = response.coords;
    setLocation({ latitude, longitude });
  };

  const errorHandler = (error) => {
    console.log(error);
    // 에러가 발생해도 기본 위치를 사용하므로 별도의 처리가 필요없습니다.
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSearch = () => {
    if (geocoder) {
      geocoder.addressSearch(address, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const { y, x } = result[0];
          setLocation({ latitude: parseFloat(y), longitude: parseFloat(x) });
        } else {
          console.log(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="주소를 입력하세요"
        />
        <button onClick={handleSearch}>검색</button>
      </div>
      <Map
        center={{ lat: location.latitude, lng: location.longitude }}
        style={{ width: "500px", height: "375px" }}
        level={3}
      >
        <MapMarker
          position={{ lat: location.latitude, lng: location.longitude }}
        />
      </Map>
    </div>
  );
};

export default KakaoMap;
