import React from 'react'
import Header from '../components/MainPage'
import CategoriesList from '../components/CategoriesList'
import KakaoMap from '../components/KakaoMap'
import SideCardList from '../components/SideCardList'
import SearchButton from '../components/SearchButton'

export default function Main() {
  return (
    <div>
      <Header />
      <CategoriesList />
      <div className='flex justify-center border-t-8'>
        <div className='px-6 py-4'>
          <SideCardList />
        </div>
        <KakaoMap />
      </div>
    </div>
  )
}
