import React from 'react'
import First_Page from '../components/simple_centered_on_dark'
import List from '../components/simple_native'
import KakaoMap from '../components/KakaoMap'

export default function Main() {
  return (
    <div>
      <First_Page />
      <List />
      <div className='flex justify-center'>
        <KakaoMap />
      </div>
    </div>
  )
}
