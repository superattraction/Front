import { useEffect, useState } from "react";

export default function CategoriesList({ setEdus }) {
  const [data2, setData] = useState([]);
  const [largeCategories, setLargeCategories] = useState([]);
  const [selectedLarge, setSelectedLarge] = useState("");
  const [mediumCategories, setMediumCategories] = useState([]);
  const [selectedMedium, setSelectedMedium] = useState("");
  const [selectedSmall, setSelectedSmall] = useState("");
  const [smallCategories, setSmallCategories] = useState([]);

  useEffect(() => {
    fetch("http://10.125.121.212:8080/ncsall")
      .then((resp) => resp.json())
      .then((data) => setData(data));

      }, []);
      
  useEffect(() => {
    if (data2.length > 0) {
      let tm = data2.map(item => item.large);
      tm = new Set(tm);
      tm = [...tm];
      setLargeCategories(tm);
    }
  }, [data2]);
  
  const eduClick = () => {
    let url = "";
    if (selectedLarge && !selectedMedium && !selectedSmall) {
      const large = selectedLarge.substring(0,2)
      url = 'http://10.125.121.212:8080/ncscodes/two/'+large;
    } else if (selectedLarge && selectedMedium && !selectedSmall) {
      const large = selectedLarge.substring(0,2)
      const medium = selectedMedium.substring(0,2)
      // const encodedMedium = encodeURIComponent(selectedMedium);
      url = 'http://10.125.121.212:8080/ncscodes/four/'+large+medium;
    } else if (selectedLarge && selectedMedium && selectedSmall) {
      // const encodedSmall = encodeURIComponent(selectedSmall);
      const large = selectedLarge.substring(0,2)
      const medium = selectedMedium.substring(0,2)
      const small = selectedSmall.substring(0,2)
      url = 'http://10.125.121.212:8080/ncscodes/six/'+large+medium+small;
      console.log(url)
    } else {
      console.log("잘못된 처리 for eduClick");
      return;
    }

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => setEdus(data));
  }
  
  const handleLargeChange = (e) => {
    const selected = e.target.value;
    setSelectedLarge(selected);
    const filteredMediums = data2
      .filter((item) => item.large === selected)
      .map((item) => item.mid);
    console.log(filteredMediums);
    setMediumCategories([...new Set(filteredMediums)]);
    setSelectedMedium("");
    setSmallCategories([]);
  };

  const handleMediumChange = (e) => {
    const selected = e.target.value;
    setSelectedMedium(selected);
    const filteredSmalls = data2
      .filter((item) => item.large === selectedLarge && item.mid === selected)
      .map((item) => item.small);
    setSmallCategories([...new Set(filteredSmalls)]);
  };

  const handleSmallChange = (e) => {
    const selected = e.target.value;
    setSelectedSmall(selected);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="flex flex-col ">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h1 className="flex items-center justify-center text-3xl font-extrabold mb-10 ">
            직무 검색
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="text-lg">
              <label className="block mb-2 font-medium text-gray-700">
                직무 대분류
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={selectedLarge}
                  onChange={handleLargeChange}
                >
                  <option value="" disabled>
                    대분류
                  </option>
                  {largeCategories.map((large, ncsCode) => (
                    <option key={ncsCode} value={large}>
                      {large}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="text-lg">
              <label className="block mb-2 font-medium text-gray-700">
                직무 중분류
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={selectedMedium}
                  onChange={handleMediumChange}
                >
                  <option value="" disabled>
                    중분류
                  </option>
                  {mediumCategories.map((medium, ncsCode) => (
                    <option key={ncsCode} value={medium}>
                      {medium}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="text-lg">
              <label className="block mb-2 font-medium text-gray-700">
                직무 소분류
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={selectedSmall}
                  onChange={handleSmallChange}
                >
                  <option value="" disabled>
                    소분류
                  </option>
                  {smallCategories.map((small, ncsCode) => (
                    <option key={ncsCode} value={small}>
                      {small}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="flex item-center justify-center">
          <button
            className="rounded-md bg-indigo-100 px-10 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-200 mt-5"
            onClick={eduClick}
          >
            검색
          </button>
        </div>
      </div>
    </div>
  );
}
