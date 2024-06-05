import React from 'react'
import MainPage from '../components/MainPage'
import CategoriesList from '../components/CategoriesList'
import KakaoMap from '../components/KakaoMap'
import SideCardList from '../components/SideCardList'

export default function Main() {
  return (
    <div>
      <MainPage />
      <CategoriesList />
      <div className='flex justify-center border-t-2 border-purple-200'>
        <div className='px-6 py-4'>
          <SideCardList />
        </div>
        <KakaoMap />
      </div>
    </div>
  )
}


