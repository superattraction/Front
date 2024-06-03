import { useEffect, useState } from "react";
import axios from 'axios';

export default function List() {

  const [data, setData] = useState([]);

  useEffect(() => {
      fetch('http://10.125.121.212:8080/ncsall')
      .then(resp => resp.json())
      .then(data => (console.log(data)))
               
  }, []);

  useEffect(() =>{
    console.log(data)
  } , [data]);
  return (
    <div className="flex justify-center items-center flex-col">
      <label htmlFor="location" className="block text-2xl font-medium leading-6 text-gray-900">
        직무 검색표
      </label>
      <select
        id="large"
        name="large"
        className="mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue="Large"
      >
        <option>United States</option>
      </select>
      <select
        id="mid"
        name="mid"
        className="mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue="Mid"
      >
        <option>United States</option>
      </select>
      <select
        id="small"
        name="small"
        className="mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue="Small"
      >
        <option>United States</option>
      </select>
    </div>
  )
}
