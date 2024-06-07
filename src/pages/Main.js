import React from 'react'
import MainPage from '../components/MainPage'
import CategoriesList from '../components/CategoriesList'
import KakaoMap from '../components/KakaoMap'
import SideCardList from '../components/SideCardList'
import { useState } from 'react'
export default function Main() {
  const[edus, setEdus] = useState([{
    "ncsCode": "12030103",
    "edu_info": {
        "id": "500020056877",
        "school_CON": "toorida@hanmail.net",
        "school_NAME": "뉴엠원격평생교육원",
        "address_info": "서울특별시 영등포구 경인로 775 (문래동3가 에이스하이테크시티) 2동 309호 및 606호",
        "school_EMAIL": "02-836-3053"
    },
    "trng_AREA_CD": "11560",
    "trpr_ID": "ACG20233000934074",
    "real_MAN": "129580",
    "subtitle_LINK": "https://www.hrd.go.kr/hrdp/co/pcoco/PCOCO0100P.do?tracseId=ACG20233000934074&tracseTme=42&trainstCstmrId=500020056877&crseTracseSe=C0031",
    "address": "서울 영등포구",
    "inst_CD": "200801418",
    "course_MAN": "129580",
    "title_LINK": "https://www.hrd.go.kr/hrdp/co/pcobo/PCOBO0100P.do?tracseId=ACG20233000934074&tracseTme=42&trainstCstmrId=500020056877&crseTracseSe=C0031",
    "tra_START_DATE": "2024-06-10",
    "train_TARGET": "국민내일배움카드(일반)",
    "title": "[관광통역안내사] 관광자원해설"
}])
  return (
    <div>
      <MainPage />
      <CategoriesList setEdus={setEdus} />
      <div className='flex justify-center'>
        <div className='px-6 py-4'>
          <SideCardList edus={edus}/>
        </div>
        <KakaoMap />
      </div>
    </div>
  )
}


