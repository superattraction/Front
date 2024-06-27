import React, { useEffect, useState } from "react";
import GridList from "./GridList";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import AiIcon from "../pages/img/AiIcon.png";

export default function SideCardList({ edus, part, onSelectAddress }) {
  const [sortedEdus, setSortedEdus] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ lat: latitude, lng: longitude });
        await geocodeAndSort(latitude, longitude);
      },
      (error) => {
        console.error("Error fetching current position:", error);
      }
    );
  }, []);

  useEffect(() => {
    setSortedEdus(edus); // Initially set edus as sortedEdus
  }, [edus]);

  const geocodeAndSort = async (currentLat, currentLng) => {
    try {
      const promises = edus.map(async (education) => {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            education.address
          )}&key=AIzaSyDIF7B0Cs2CpbW4yegmhRk4BiNYsWxl2wA`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch geocode data");
        }
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          const distance = calculateDistance(currentLat, currentLng, lat, lng);
          return { ...education, distance };
        }
        return education;
      });

      const sortedEdusWithDistance = await Promise.all(promises);
      const sortedEdusByDistance = sortedEdusWithDistance.sort(
        (a, b) => a.distance - b.distance
      );
      setSortedEdus(sortedEdusByDistance);
    } catch (error) {
      console.error("Error geocoding and sorting:", error);
    }
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const fetchSortedData = async (sortCriteria, part) => {
    if (!part) {
      console.error("NCS코드가 존재하지 않습니다.");
      return;
    }

    let url;
    switch (sortCriteria) {
      case "related":
        url = `http://10.125.121.212:8080/ncscodes/six/pssort/${part}`;
        break;
      case "custom":
        url = `http://10.125.121.212:8080/ncscodes/six/ratingsort/${part}`;
        break;
      default:
        return;
    }

    console.log("Fetching URL:", url);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Fetched data:", data);
      setSortedEdus(data);
    } catch (error) {
      console.error("Fetching data failed:", error);
    }
  };

  const sortByDistance = () => {
    if (currentPosition) {
      geocodeAndSort(currentPosition.lat, currentPosition.lng);
    }
  };

  return (
    <>
      <div className="sticky top-0 bg-white z-10">
        <div className="flex mb-4 justify-center items-center">
          <button
            type="button"
            onClick={() => sortByDistance()}
            className="mr-4 inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            현재 위치 기반 거리순
          </button>
          <img src={AiIcon} className="h-10 w-10" />

          <button
            type="button"
            onClick={() => fetchSortedData("related", part)}
            className="mr-4 inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            수강후기 분석 만족도순
          </button>
          <button
            type="button"
            onClick={() => fetchSortedData("custom", part)}
            className="mr-4 inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            평균 별점도순
          </button>
        </div>
      </div>
      <div className="w-auto p-2 border-gray-300">
        <GridList edus={sortedEdus} onSelectAddress={onSelectAddress} />
      </div>
    </>
  );
}
