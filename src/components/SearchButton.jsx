import React, {useState} from 'react'

const SearchButton = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    onSearch(inputValue);
  };

  return (
    <>
    <div className='flex relative w-1/2 h-1/2 mt-2 mb-4 items-center justify-center'>
      <input
        type="text"
        name="search"
        id="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className='block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
    </div>
      <button
        className="rounded-md bg-indigo-100 px-10 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-200 mt-5"
        onClick={handleClick}
      >
        검색
      </button>
    </>
  )
}

export default SearchButton;
