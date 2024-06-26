import React, { useState, useEffect } from 'react';
import MainPage from '../components/MainPage';
import CategoriesList from '../components/CategoriesList';
import SideCardList from '../components/SideCardList';
import MainFooter from '../components/MainFooter';
import MyMap from '../components/MapNaverDefault';

export default function Main() {
  const [edus, setEdus] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [part, setPart] = useState(''); // NCS code 상태 추가

  useEffect(() => {
    // 예제 데이터를 로드하는 부분
    const fetchData = async () => {
      try {
        const response = await fetch('/api/v1/initialdata');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        setEdus(data);
      } catch (error) {
        console.error('Fetching data failed:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <MainPage />
      <CategoriesList setEdus={setEdus} setPart={setPart} />
      <div className="flex justify-center mb-10 h-screen">
        <div className="w-full max-w-7xl px-6 py-4 flex h-full">
          <div className="w-full h-full overflow-y-auto">
            <SideCardList edus={edus} part={part} onSelectAddress={setSelectedAddress} />
          </div>
          <div className="w-1/2 h-full ml-5">
            <MyMap address={selectedAddress} />
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
}