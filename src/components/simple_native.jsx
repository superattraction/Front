import { useEffect, useState } from "react";

export default function List() {

  const [data2, setData] = useState([]);
  const [largeCategories, setLargeCategories] = useState([]);
  const [selectedLarge, setSelectedLarge] = useState('');
  const [mediumCategories, setMediumCategories] = useState([]);
  const [selectedMedium, setSelectedMedium] = useState('');
  const [selectedSmall, setSelectedSmall] = useState('');
  const [smallCategories, setSmallCategories] = useState([]);

  useEffect(() => {
      fetch('http://10.125.121.212:8080/ncsall')
      .then(resp => resp.json())
      .then(data => setData(data))
               
  }, []);

  useEffect(() => {
    let tm = data2.map(item => item.large);
    tm = new Set(tm) ;
    tm = [...tm] ;
    setLargeCategories(tm)
    console.log("tdata tm => ", tm)  
    console.log(data2)
  } , [data2]);

  const handleLargeChange = (e) => {
    const selected = e.target.value;
    setSelectedLarge(selected);
    const filteredMediums = data2.filter(item => item.large === selected).map(item => item.mid);
    console.log(filteredMediums)
    setMediumCategories([...new Set(filteredMediums)]);
    setSelectedMedium('');
    setSmallCategories([]);
  };

  const handleMediumChange = (e) => {
    const selected = e.target.value;
    setSelectedMedium(selected);
    const filteredSmalls = data2.filter(item => item.large === selectedLarge && item.mid === selected).map(item => item.small);
    setSmallCategories([...new Set(filteredSmalls)]);
  };

  const handleSmallChange = (e) => {
    const selected = e.target.value;
    setSelectedSmall(selected);
  };


  return (
    <div className="flex flex-col items-center justify-center">
    <h1 className="text-2xl font-extrabold m-10">직무 검색표</h1>
    <div className="flex justify-between items-center m-3 p-5">      
      <div className="text-lg">
        <label>
          직무 대분류
          <select value={selectedLarge} onChange={handleLargeChange}>
            <option value="" disabled>선택하세요.</option>
            {largeCategories.map((large, index) => (
              <option key={index} value={large}>
                {large}
            </option>
            ))}
          </select>
        </label>
      </div>

      {/* {mediumCategories.length > 0 && ( */}
        
    <div className="text-lg">
      <label>
            직무 중분류
            <select value={selectedMedium} onChange={handleMediumChange}>
              <option value="" disabled>선택하세요.</option>
              {mediumCategories.map((medium, index) => (
                <option key={index} value={medium}>
                  {medium}
                </option>
              ))}
            </select>
          </label>
        </div>
      {/* )} */}

      {/* {smallCategories.length > 0 && ( */}
        <div className="text-lg">
          <label>
            직무 소분류
            <select value={selectedSmall} onChange={handleSmallChange}>
              <option value="" disabled>선택하세요.</option>
              {smallCategories.map((small, index) => (
                <option key={index} value={small}>
                  {small}
                </option>
              ))}
            </select>
          </label>
        </div>
      {/* )} */}
    </div>
    </div>
  )
}

