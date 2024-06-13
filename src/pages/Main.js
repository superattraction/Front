import { useState } from "react";

import React from "react";
import MainPage from "../components/MainPage";
import CategoriesList from "../components/CategoriesList";
import KakaoMap from "../components/KakaoMap";
import SideCardList from "../components/SideCardList";
import MainFooter from "../components/MainFooter";
import GridList from "../components/GridList";

export default function Main() {
  const [edus, setEdus] = useState([]);
  const [location, setLocation] = useState({
    latitude: 37.566826,
    longitude: 126.9786567,
  });
  const [address, setAddress] = useState("");

  const handleAddressClick = (newAddress) => {
    setAddress(newAddress);
  };

  return (
    <div>
      <MainPage />
      <CategoriesList setEdus={setEdus} />
      <GridList edus={edus} onAddressClick={handleAddressClick} />
      <div className="flex justify-center mb-10">
        <div className="px-6 py-4">
          <SideCardList edus={edus} />
        </div>
        <KakaoMap location={location} setLocation={setLocation} address={address}/>
      </div>
      <MainFooter />
    </div>
  );
}
