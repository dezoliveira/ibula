'use client'

import Lottie from "lottie-react";
import animationData from '@/app/lotties/loading.json'

export default function Loading() {
  return(
    <div className="full-wrapper d-flex justify-content-center align-items-center ">
      <div>
        <Lottie
          style={{width: '200px', height: '200px'}}
          animationData={animationData}
          />
      </div>
    </div>
  )
}