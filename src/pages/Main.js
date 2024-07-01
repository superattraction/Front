import React, { useState, useEffect } from 'react';
import MainPage from '../components/MainPage';
import CategoriesList from '../components/CategoriesList';
import SideCardList from '../components/SideCardList';
import MainFooter from '../components/MainFooter';
import MyMap from '../components/MapNaverDefault';

export default function Main() {
  const [edus, setEdus] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [part, setPart] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/v1/initialdata');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          console.log('Fetched data:', data);
          setEdus(data);
        } else {
          throw new Error('Received non-JSON response');
        }
      } catch (error) {
        console.error('Fetching data failed:', error.message);
        // 에러 메시지를 더 구체적으로 표시
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