import React, { useEffect, useState } from 'react';
import GridList from './GridList';

export default function SideCardList({ edus, part, onSelectAddress }) {
  const [sortedEdus, setSortedEdus] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error fetching current position:", error);
      }
    );
  }, []);

  useEffect(() => {
    setSortedEdus(edus); // 처음 로드될 때 edus를 sortedEdus로 설정
  }, [edus]);

  const fetchSortedData = async (sortCriteria, part) => {
    if (!part) {
      console.error('NCS코드가 존재하지 않습니다.');
      return;
    }

    let url;
    switch (sortCriteria) {
      case 'related':
        url = `http://10.125.121.212:8080/ncscodes/six/pssort/${part}`;
        break;
      case 'custom':
        url = `http://10.125.121.212:8080/ncscodes/six/ratingsort/${part}`;
        break;
      default:
        return;
    }

    console.log('Fetching URL:', url);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched da8ta:', data);
      setSortedEdus(data);
    } catch (error) {
      console.error('Fetching data failed:', error);
    }
  };

  const sortByDistance = () => {
    if (!currentPosition) return;

    const haversineDistance = (lat1, lon1, lat2, lon2) => {
      const toRad = (x) => (x * Math.PI) / 180;
      const R = 6371; // km
      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) *
          Math.cos(toRad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    };

    const sorted = [...sortedEdus].sort((a, b) => {
      const distanceA = haversineDistance(
        currentPosition.lat,
        currentPosition.lng,
        a.latitude,
        a.longitude
      );
      const distanceB = haversineDistance(
        currentPosition.lat,
        currentPosition.lng,
        b.latitude,
        b.longitude
      );
      return distanceA - distanceB;
    });
    setSortedEdus(sorted);
  };

  return (
    <div className="w-full h-full overflow-y-auto p-2 border-gray-300">
      <div className="flex mb-4 justify-center items-center">
        <button onClick={() => sortByDistance()} className="px-4 py-2 mr-5 bg-violet-400 text-white rounded-full">
          거리순
        </button>
        <button onClick={() => fetchSortedData('related', part)} className="px-4 py-2 mr-5 bg-green-400 text-white rounded-full">
          관련도순
        </button>
        <button onClick={() => fetchSortedData('custom', part)} className="px-4 py-2 mr-5 bg-orange-400 text-white rounded-full">
          맞춤도순
        </button>
      </div>
      <GridList edus={sortedEdus} onSelectAddress={onSelectAddress} />
    </div>
  );
}