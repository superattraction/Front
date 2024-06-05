import React from 'react'
import Header from '../components/Header'
import CategoriesList from '../components/CategoriesList'
import KakaoMap from '../components/KakaoMap'
import SideCardList from '../components/SideCardList'

export default function Main() {
  return (
    <div>
      <Header />
      <CategoriesList />
      <div className='flex justify-center'>
        <div className='px-6 py-4'>
          <SideCardList />
        </div>
        <KakaoMap />
      </div>
    </div>
  )
}
