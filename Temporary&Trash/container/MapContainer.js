import React, { useEffect } from 'react'

const { kakao } = window;

const MapContainer = () => {

    useEffect(() => {
        const container = document.getElementById('myMap');
        const options = {
            center : new kakao.maps.LatLng(35.12, 129.1),
            level: 3
        };

        const map = new kakao.maps.Map(container, options);

        const geocoder = new kakao.maps.services.Geocoder();

        geocoder.addressSearch('제주특별자치도 제주시 첨단로 242', function (result, status){
            if (status === kakao.maps.services.Status.OK) {

                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                var infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:150p;color:red;text-align:center;padding:6px 0;">내가 썼지롱</div>'
                });
                infowindow.open(map, marker);

                map.setCenter(coords);
            }
        })
    }, []);
}


export default function MapContainer() {
  return (
      <div id ='myMap' style={{
        width : '800px',
        height : '800px'
      }}></div>
  );
}
